---
title: "View Template Information"
weight: 10
---

<!-- # View Template Information -->

Click on a template tile (not the 'New…' button but the tile itself) to view information about that template.

<figure style="max-width: 80%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/template_info.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Example of information presented when viewing a template. Note: Not all possible template metadata is shown in this screenshot
  </figcaption>
</figure>

**Product area** - the product area that this template most closely maps to, i.e. security, observability or platform.  
**Platform** - whether this template leverages Splunk Cloud ("Cloud"), Splunk Enterprise ("Enterprise") or a mixture of environments, including SCS and SOAR ("Hybrid").  
**Minutes to be ready** - an approximate time that this template will take to provision. This value is based on recent provisioning metrics and so can vary over time depending on the load being placed on the Splunk Show backend services.  
**Description** - a general description of the template including any important information you need to know about this demo, such as additional configuration required, etc.  
**Instructions** - <span class="conditional-note">(only displayed in some templates)</span> outlines any additional instructions that you should know about this template, such as how long data backfill takes to complete before your demo is fully ready to use.

<figure style="max-width: 80%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/instructions.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Example of additional instructions included in a demo template. Note: Not all templates include this section
  </figcaption>
</figure>

**Installed apps** - <span class="conditional-note">(only displayed for Cloud-based templates)</span> displays the Splunk apps installed in this template during the provisioning process.  
**Sourcetypes** - <span class="conditional-note">(only displayed for single instance templates)</span> displays the source types included in this template.  
**Datagen Source** - <span class="conditional-note">(only displayed in templates where a Datapet feed is used)</span> displays the demo data sets included in this template. Note that 'friendly' names are used here, e.g. "InfoSec Data" and specific source type names are displayed under the 'Sourcetypes' section (see above).  
**Grouped Resources** - <span class="conditional-note">(only displayed in some templates)</span> where a template includes more than one platform type, this section is included to indicate the platforms included and the versions for each.

<div style="display: flex; gap: 1rem; align-items: stretch; margin-bottom: 1rem;">
  <figure style="width: 48%; margin: 0; display: flex; flex-direction: column; align-items: center;">
    <img src="/splunk-show-docs/images/grouped_resources_01.png" alt="Grouped Resources 1" style="width: 100%; height: auto; display: block; flex-shrink: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Grouped resources example 1
    </figcaption>
  </figure>
  <figure style="width: 48%; margin: 0; display: flex; flex-direction: column; align-items: center;">
    <img src="/splunk-show-docs/images/grouped_resources_02.png" alt="Grouped Resources 2" style="width: 100%; height: auto; display: block; flex-shrink: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Grouped resources example 2
    </figcaption>
  </figure>
</div>

**Additional Information** - additional useful metadata about the template, including:

* **Last update** - the date when this template was last modified. Please see the [Splunk Show Release Notes](https://splunk.show/release-notes) *(Only accessible to Splunkers)* for detailed information about changes made to Show content.
* **Version** - <span class="conditional-note">(only displayed in some templates)</span> the Splunk product version that this template leverages. 

  {{% notice info %}}
  **Note:** where a template includes more than one platform, for example both a Splunk Enterprise and a Splunk Cloud instance, the version numbers will be displayed under the _Group Resources_ section (see above) rather than under Additional Information.
  {{% /notice %}}

**Enablement Materials** - a link to the relevant enablement materials for this template, including the demo script.  
If this button is linked to a Google Drive folder you will see a popup with a list of all available files to download.

**Submit Content Feedback** - send content improvement feedback directly to the content owner by clicking this button and filling out the form in the popup Send Feedback window.

{{% notice warning %}}
**Experiencing Technical Issues with a Show Instance?**  
The Submit Content Feedback button should only be used for content improvement feedback.  
If you are experiencing technical issues related to the running of a Splunk Show demo/workshop - such as instances not spinning up or data not appearing in a specific instance - please raise a support request (see [Support](/support/).)
{{% /notice %}}
