---
title: "Salesforce Integration"
weight: 30
---

<!-- # Salesforce Integration -->

<span class="label">Splunkers Only</span>

Under **Account Settings** click on the **Salesforce** tab and click the **Connect to Salesforce** button. This will leverage a Connected App and log in to Salesforce using your Okta credentials. When complete, you will be redirected to Splunk Show. That's it! You are now connected.

<figure style="max-width: 70%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/account_settings_salesforce.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Salesforce integration settings
  </figcaption>
</figure>

{{% notice warning %}}
**Salesforce Error?**  
If you see an error message when connecting to Salesforce, this likely means you don't have the proper access rights for the Connected App. If you believe this is an error, please reach out to the Splunk Show team.
{{% /notice %}}

Once you are connected to Salesforce, you will see an additional search option when creating a demo or workshop. Previously, Splunk Show required that you provide the SFDC record ID; if you still prefer that workflow you can still manually enter/paste the ID as before and Splunk Show will search the record in Salesforce, pulling back the name and type of record.

<figure style="max-width: 70%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/use_case.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Select Salesforce as your use case when possible
  </figcaption>
</figure>

Alternatively, **you can now search Salesforce records directly**, by clicking on **Advanced search**, selecting the desired activity type, and entering your search criteria. Once you click on a given record, it will paste the needed ID back into the create form.

<div style="display: flex; gap: 1rem; align-items: stretch; margin-bottom: 1rem;">
  <figure style="width: 48%; margin: 0; display: flex; flex-direction: column;">
    <img src="/splunk-show-docs/images/salesforce_id.png" alt="Grouped Resources 1" style="width: 100%; height: auto; display: block; flex-shrink: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Use the in-built search to find a Salesforce record if you don't know the ID
    </figcaption>
  </figure>
  <figure style="width: 48%; margin: 0; display: flex; flex-direction: column;">
    <img src="/splunk-show-docs/images/use_case_example.png" alt="Grouped Resources 2" style="width: 100%; height: auto; display: block; flex-shrink: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Example of a Salesforce ID being populated by the advanced search
    </figcaption>
  </figure>
</div>
