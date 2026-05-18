#!/usr/bin/env node
/**
 * Process release_notes.md and generate Hugo-compatible markdown files
 * in content/release-notes/ with proper front matter and weights.
 * 
 * Usage: node scripts/process-release-notes.js
 * 
 * Requires no package.json - uses globally installed packages in CI.
 */

const fs = require('fs');
const path = require('path');

const INPUT_FILE = 'files/release_notes.md';
const OUTPUT_DIR = 'content/release-notes';
const CONTENT_DIR = 'content';

/**
 * Scan content directory for highest weight among top-level sections
 * and return that value + 10 for release-notes section
 */
function calculateSectionWeight() {
  let maxWeight = 0;
  
  try {
    const entries = fs.readdirSync(CONTENT_DIR, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.isDirectory() && entry.name !== 'release-notes') {
        const indexPath = path.join(CONTENT_DIR, entry.name, '_index.md');
        
        if (fs.existsSync(indexPath)) {
          const content = fs.readFileSync(indexPath, 'utf-8');
          // Match weight in TOML front matter: weight = 70
          const match = content.match(/^weight\s*=\s*(\d+)/m);
          if (match) {
            const weight = parseInt(match[1], 10);
            if (weight > maxWeight) {
              maxWeight = weight;
            }
          }
        }
      }
    }
  } catch (err) {
    console.warn(`Warning: Could not scan content directory: ${err.message}`);
  }
  
  // Default to 80 if no weights found, otherwise add 10 to highest
  const sectionWeight = maxWeight > 0 ? maxWeight + 10 : 80;
  console.log(`Highest existing weight: ${maxWeight}, using section weight: ${sectionWeight}`);
  return sectionWeight;
}

function parseReleaseNotes(content) {
  // Remove the metadata header (everything before the first ---)
  const parts = content.split(/^---$/m);
  // Find the actual content after metadata blocks
  let mainContent = content;
  if (parts.length >= 3) {
    // Skip title and metadata sections at the top
    mainContent = parts.slice(2).join('---');
  }

  // Match date headers like "### **Feb 02 2026**" or "## **Jan 16, 2026**"
  const dateRegex = /^#{2,3}\s*\*\*([A-Za-z]+\s+\d{1,2}[,]?\s+\d{4})\*\*/gm;
  
  const releases = [];
  let match;
  const matches = [];
  
  // Find all date headers and their positions
  while ((match = dateRegex.exec(mainContent)) !== null) {
    matches.push({
      date: match[1].trim(),
      index: match.index,
      fullMatch: match[0]
    });
  }

  // Extract content between date headers
  for (let i = 0; i < matches.length; i++) {
    const start = matches[i].index + matches[i].fullMatch.length;
    const end = matches[i + 1] ? matches[i + 1].index : mainContent.length;
    let body = mainContent.slice(start, end).trim();
    
    // Remove trailing --- separators
    body = body.replace(/\n---\s*$/, '').trim();
    
    releases.push({
      date: matches[i].date,
      body: body
    });
  }

  return releases;
}

function dateToSlug(dateStr) {
  // Convert "Feb 02 2026" or "Jan 16, 2026" to "2026-02-02"
  const months = {
    'jan': '01', 'feb': '02', 'mar': '03', 'apr': '04',
    'may': '05', 'jun': '06', 'jul': '07', 'aug': '08',
    'sep': '09', 'oct': '10', 'nov': '11', 'dec': '12'
  };
  
  const cleaned = dateStr.replace(/,/g, '').trim();
  const parts = cleaned.split(/\s+/);
  
  if (parts.length === 3) {
    const month = months[parts[0].toLowerCase().slice(0, 3)] || '01';
    const day = parts[1].padStart(2, '0');
    const year = parts[2];
    return `${year}-${month}-${day}`;
  }
  
  // Fallback: slugify the date string
  return dateStr.toLowerCase().replace(/[,\s]+/g, '-');
}

function main() {
  // Check if input file exists
  if (!fs.existsSync(INPUT_FILE)) {
    console.error(`Error: Input file not found: ${INPUT_FILE}`);
    process.exit(1);
  }

  // Read release notes
  const content = fs.readFileSync(INPUT_FILE, 'utf-8');
  console.log(`Read ${content.length} bytes from ${INPUT_FILE}`);

  // Parse releases
  const releases = parseReleaseNotes(content);
  console.log(`Found ${releases.length} release entries`);

  if (releases.length === 0) {
    console.error('Warning: No release entries found');
    process.exit(0);
  }

  // Create output directory
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Calculate section weight dynamically
  const sectionWeight = calculateSectionWeight();

  // Create _index.md for the section
  const indexContent = `+++
title = "Release Notes"
weight = ${sectionWeight}
searchExclude = true
+++

Release notes for Splunk Show platform updates and content changes.

These notes are automatically synced from the [Splunk Show Release Notes](https://cisco.sharepoint.com/sites/SplunkShow/SitePages/Splunk-Show-Release-Notes.aspx) SharePoint page.
`;

  fs.writeFileSync(path.join(OUTPUT_DIR, '_index.md'), indexContent);
  console.log(`Created ${OUTPUT_DIR}/_index.md`);

  // Create individual release files
  // Weight 1 = newest (appears first), incrementing for older entries
  // Start at weight 2 to leave room for "View All" page at weight 1
  releases.forEach((release, index) => {
    const slug = dateToSlug(release.date);
    const weight = index + 2; // Start at 2, leaving 1 for View All
    
    const fileContent = `+++
title = "${release.date}"
weight = ${weight}
searchExclude = true
+++

${release.body}
`;

    const filename = `${slug}.md`;
    fs.writeFileSync(path.join(OUTPUT_DIR, filename), fileContent);
    console.log(`  Created ${filename} (weight: ${weight})`);
  });

  // Create "View All" page with all release notes concatenated
  let viewAllContent = `+++
title = "View All"
weight = 1
searchExclude = true
+++

All release notes in one page for easy searching (Cmd+F / Ctrl+F).

---

`;

  releases.forEach((release) => {
    viewAllContent += `## ${release.date}\n\n${release.body}\n\n---\n\n`;
  });

  fs.writeFileSync(path.join(OUTPUT_DIR, 'view-all.md'), viewAllContent);
  console.log(`  Created view-all.md (weight: 1)`);

  console.log(`\nSuccessfully processed ${releases.length} release notes to ${OUTPUT_DIR}/`);
}

main();
