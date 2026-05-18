#!/usr/bin/env node
/**
 * Fetch release notes from SharePoint and convert to Markdown.
 * 
 * Usage: node scripts/fetch-release-notes.js
 * 
 * Required environment variables:
 *   AZURE_TENANT_ID     - Azure AD tenant ID
 *   AZURE_CLIENT_ID     - Azure AD app client ID
 *   AZURE_CLIENT_SECRET - Azure AD app client secret
 * 
 * Requires globally installed packages in CI:
 *   npm install -g axios node-html-markdown
 */

const fs = require('fs');
const path = require('path');

// These will be loaded from global node_modules in CI
let axios, NodeHtmlMarkdown;

try {
  axios = require('axios');
  NodeHtmlMarkdown = require('node-html-markdown').NodeHtmlMarkdown;
} catch (err) {
  console.error('Error: Required packages not found. Install with:');
  console.error('  npm install -g axios node-html-markdown');
  process.exit(1);
}

// Configuration
const CONFIG = {
  tenantId: process.env.AZURE_TENANT_ID,
  clientId: process.env.AZURE_CLIENT_ID,
  clientSecret: process.env.AZURE_CLIENT_SECRET,
  siteName: 'SplunkShow',
  siteHost: 'cisco.sharepoint.com',
  pageName: 'Splunk-Show-Release-Notes',
  outputDir: 'files',
  outputFile: 'release_notes.md'
};

/**
 * Get OAuth2 access token from Azure AD
 */
async function getAccessToken() {
  const tokenUrl = `https://login.microsoftonline.com/${CONFIG.tenantId}/oauth2/v2.0/token`;
  
  const params = new URLSearchParams({
    client_id: CONFIG.clientId,
    client_secret: CONFIG.clientSecret,
    scope: 'https://graph.microsoft.com/.default',
    grant_type: 'client_credentials'
  });

  const response = await axios.post(tokenUrl, params, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });

  return response.data.access_token;
}

/**
 * Get SharePoint site ID from site host and name
 */
async function getSiteId(accessToken) {
  const url = `https://graph.microsoft.com/v1.0/sites/${CONFIG.siteHost}:/sites/${CONFIG.siteName}`;
  
  const response = await axios.get(url, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });

  return response.data.id;
}

/**
 * Get SharePoint page content
 */
async function getPageContent(accessToken, siteId) {
  // First, get the page to find its webUrl and metadata
  const pagesUrl = `https://graph.microsoft.com/v1.0/sites/${siteId}/pages`;
  
  const pagesResponse = await axios.get(pagesUrl, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });

  // Find the release notes page
  const page = pagesResponse.data.value.find(p => 
    p.name && p.name.toLowerCase().includes('release-notes')
  );

  if (!page) {
    throw new Error(`Page not found: ${CONFIG.pageName}`);
  }

  console.log(`Found page: ${page.name} (ID: ${page.id})`);

  // Get the page content with webParts
  const pageUrl = `https://graph.microsoft.com/v1.0/sites/${siteId}/pages/${page.id}/microsoft.graph.sitePage?$expand=canvasLayout`;
  
  const pageResponse = await axios.get(pageUrl, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });

  return pageResponse.data;
}

/**
 * Extract HTML content from SharePoint page structure
 */
function extractHtmlContent(pageData) {
  let html = '';
  
  // Extract from canvas layout (modern pages)
  if (pageData.canvasLayout && pageData.canvasLayout.horizontalSections) {
    for (const section of pageData.canvasLayout.horizontalSections) {
      if (section.columns) {
        for (const column of section.columns) {
          if (column.webparts) {
            for (const webpart of column.webparts) {
              if (webpart.innerHtml) {
                html += webpart.innerHtml;
              }
            }
          }
        }
      }
    }
  }

  // Fallback: check for direct content
  if (!html && pageData.webParts) {
    for (const part of pageData.webParts) {
      if (part.data && part.data.innerHtml) {
        html += part.data.innerHtml;
      }
    }
  }

  return html;
}

/**
 * Convert HTML to Markdown with metadata header
 */
function convertToMarkdown(pageData, htmlContent) {
  const nhm = new NodeHtmlMarkdown({
    bulletMarker: '-',
    codeBlockStyle: 'fenced'
  });

  const markdown = nhm.translate(htmlContent);
  
  // Build metadata header
  const header = `# ${pageData.title || 'Splunk Show Release Notes'}

> ${pageData.description || 'Below you will find the release notes for Splunk Show.'}

---

**Page Information:**

- **URL:** https://${CONFIG.siteHost}/sites/${CONFIG.siteName}/SitePages/${CONFIG.pageName}.aspx
- **Created:** ${pageData.createdDateTime || 'Unknown'}
- **Last Modified:** ${pageData.lastModifiedDateTime || 'Unknown'}
- **Created By:** ${pageData.createdBy?.user?.displayName || 'Unknown'}
- **Modified By:** ${pageData.lastModifiedBy?.user?.displayName || 'Unknown'}

---

`;

  return header + markdown;
}

/**
 * Main function
 */
async function main() {
  // Validate required environment variables
  const required = ['AZURE_TENANT_ID', 'AZURE_CLIENT_ID', 'AZURE_CLIENT_SECRET'];
  const missing = required.filter(v => !process.env[v]);
  
  if (missing.length > 0) {
    console.error(`Error: Missing required environment variables: ${missing.join(', ')}`);
    console.error('\nRequired variables:');
    console.error('  AZURE_TENANT_ID     - Azure AD tenant ID');
    console.error('  AZURE_CLIENT_ID     - Azure AD app client ID');
    console.error('  AZURE_CLIENT_SECRET - Azure AD app client secret');
    process.exit(1);
  }

  try {
    console.log('Authenticating with Microsoft Graph API...');
    const accessToken = await getAccessToken();
    
    console.log('Getting SharePoint site ID...');
    const siteId = await getSiteId(accessToken);
    console.log(`Site ID: ${siteId}`);
    
    console.log('Fetching release notes page...');
    const pageData = await getPageContent(accessToken, siteId);
    
    console.log('Extracting HTML content...');
    const htmlContent = extractHtmlContent(pageData);
    
    if (!htmlContent) {
      throw new Error('No content found in page');
    }
    console.log(`Extracted ${htmlContent.length} bytes of HTML`);
    
    console.log('Converting to Markdown...');
    const markdown = convertToMarkdown(pageData, htmlContent);
    
    // Ensure output directory exists
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
    
    // Write output file
    const outputPath = path.join(CONFIG.outputDir, CONFIG.outputFile);
    fs.writeFileSync(outputPath, markdown);
    
    console.log(`\nSuccessfully saved release notes to ${outputPath}`);
    console.log(`File size: ${markdown.length} bytes`);
    
  } catch (error) {
    console.error('Error fetching release notes:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', JSON.stringify(error.response.data, null, 2));
    }
    process.exit(1);
  }
}

main();
