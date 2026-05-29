---
title: "Creating a Demo"
weight: 10
---

<!-- # Create a Demo (New Demo Page) -->

When you click on the **New demo** button for a demo template you are taken to the **New demo** page with the following options available to you:

{{% notice style="info" title="Note" %}}
These options may vary by template
{{% /notice %}}

## New demo
<img src="/splunk-show-docs/images/new_demo.png" alt="my_page" style="width: 80%; height: auto; display: block; margin: 0;">

* **Name** - the customizable name of the demo instance
* **Custom notes** - a free text field for any internal notes related to this demo

## Use Case
<img src="/splunk-show-docs/images/use_case.png" alt="my_page" style="width: 80%; height: auto; display: block; margin: 0;">

The reason for the demo instance, which has several options (Please expand the section relevant to your role)::

{{% expand title="Splunker Options" %}}

* **Type** 
  <figure style="max-width: 40%; margin: 0 0 1rem 0;">
    <img src="/splunk-show-docs/images/use_case_dropdown.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Options available to Splunkers
    </figcaption>
    </figure>

  * **Salesforce** - the instance is being spun up for a customer-facing activity related to one of the following Salesforce entities. Please use this option when possible as it helps the team to track the demo instance spend to a specific Salesforce record. Either paste in the SFDC ID for the Account, Opportunity, Campaign, or SESR/INH the workshop will be tied to, or alternatively use the **Advanced search** option to search by name. For more detailed information, see the [Salesforce Integration](/account-settings/salesforce/) section.
    <figure style="max-width: 80%; margin: 0 0 1rem 0;">
    <img src="/splunk-show-docs/images/use_case_sfdc_dropdown.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Available SFDC record types when using the Advanced search
    </figcaption>
    </figure>

    When you click on Advanced search the following SFDC record types are available:

    * Account
    * Opportunity
    * Campaign
    * SESR-INH (Sales Engineer Support Request (SESR) / I Need Help (INH) Request)

  * **Training** - <span class="restriction-note">(not suitable for customer facing activities)</span> the demo instance is for enablement/learning the demo. When you select Training the following limits will apply:
    * You will be <span class="text-red">limited to only 1 instance per demo/workshop template</span> in Show
    * You will be limited to a <span class="text-red">maximum runtime of 1 day</span>.
  * **Internal (Splunk)** - <span class="restriction-note">(not suitable for customer facing activities)</span> the demo instance is for **internal testing only**.

{{% /expand %}}

{{% expand title="Partner Options" %}}

* **Type** 
  <figure style="max-width: 40%; margin: 0 0 1rem 0;">
    <img src="/splunk-show-docs/images/use_case_dropdown_partner.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Options available to partners
    </figcaption>
  </figure>

* **Salesforce** - the demo is being spun up for a customer-facing activity related to one of the following Salesforce entities. Please use this option when possible as it helps the team to tie content usage to a specific customer.
  <img src="/splunk-show-docs/images/use_case_sfdc_dropdown_partner.png" alt="my_page" style="width: 80%; height: auto; display: block; margin: 0;">

  * **ID Type**
    * Account
    * Opportunity
  * **ID Number** - Simply enter the name of the customer you are running the demo for - <span class="text-red">no formal Salesforce ID is required</span>.

* **Training** - <span class="restriction-note">(not suitable for customer facing activities)</span> the demo is for enablement/learning purposes. When you select Training the following limits will apply:
  * You will be <span class="text-red">limited to only 1 instance per demo/workshop template</span> in Show
  * You will be <span class="text-red">limited to a maximum runtime of 1 day.</span>

  {{% /expand %}}

## Network
  <img src="/splunk-show-docs/images/network_demo.png" alt="my_page" style="width: 60%; height: auto; display: block; margin: 0;">

* **SSH access** - <span class="label">Splunkers Only</span><span class="restriction-note"> (only available on some Some Enterprise based templates)</span> this option allows you to enable SSH access to the instance. Once enabled, the SSH access information will be available under the instance details alongside your Splunk login credentials.


{{% notice style="info" title="SSH Access Considerations" %}}

* For security reasons SSH access for demo instances **requires a full tunnel VPN connection**. Split tunnels will not work for SSH.
* Due to the VPN requirement SSH access is **not available to partners**.
* SSH access in Splunk Show uses a **custom port** (see the instance access information once SSH has been enabled).
* SSH is **not available for Cloud instances**, as the Cloud Orchestration (CO2) service does not allow user/pass authentication to its instances. This is noted within the Splunk Show UI.
{{% /notice %}}

## Runtime
  <img src="/splunk-show-docs/images/runtime_demo.png" alt="my_page" style="width: 80%; height: auto; display: block; margin: 0;">

Provides options to customise the running schedule for your instance(s). Options include:

* **Schedule** - select whether you want your demo to be spun up
  <figure style="max-width: 80%; margin: 0 0 1rem 0;">
    <img src="/splunk-show-docs/images/schedule_demo.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Options available when scheduling an instance
    </figcaption>
  </figure>

  * **Now** - spins up the demo immediately
  * **Schedule** - enter a future date/time to have Show schedule the provisioning. If you select Schedule you have the following additional options:
    * **Schedule Start** - the date when your demo will be spun up
    * **Time** - the time (on the 'Schedule Start' date) when your demo will be spun up
    * **Time zone** - the time zone for the 'Time' value provided

* **Lifetime** - the Time-to-Live (TTL) for your demo (minimum of 2 hours, maximum of 14 days.)

  {{% notice style="info" title="Training Use Cases" %}}
  If you select 'Training' for your use case you will be limited to a maximum lifetime of 1 day. If you need the demo to run for longer, enter a Salesforce activity for the use case.
  {{% /notice %}}

* **Operating hours** - <span class="restriction-note">(can only be changed on Splunk Enterprise based templates)</span> this allows you to create a custom schedule for the instance, selecting the days and time window you would like to have the instance available. Once selected, Splunk Show will automatically pause/restart the instance at the scheduled time.
  <img src="/splunk-show-docs/images/operating_hours.png" alt="my_page" style="width: 50%; height: auto; display: block; margin: 0;">

  {{% notice style="info" title="Splunk Cloud Based Templates" %}}
  Splunk Cloud instances must run 24/7 and their operating hours cannot be customized. This is noted within the Splunk Show UI.
  {{% /notice %}}

* The available time window selections are:
  * **System default operating hours** - this is the default choice, which will set a typical business hour schedule from 8:00AM-6:00PM localized for your timezone (as reported by the browser).
  * **User default operating hours** - Within Account Settings > Preferences > Scheduled Instances, there is a place to set a user-defined schedule if you operate outside of typical business hours, or have use cases that require different time windows.
  * **Custom operating hours** - this option is to set a schedule for that specific instance in cases where a one-off schedule is required.
    <figure style="max-width: 80%; margin: 0 0 1rem 0;">
      <img src="/splunk-show-docs/images/custom_operating_hours.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
      <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
        Example of using ‘Custom operating hours’
      </figcaption>
    </figure>

    If you select Custom operating hours you have the following additional options:
    * **Choose days** - select the specific days of the week and hours of the day when you want your instance(s) to run. Please consider the cost implications of running instances for extended hours.

  * **Run always (24/7)** - the instance will not follow a schedule and will remain online the entire specified time. Note that Splunk Cloud stacks can only run 24/7.

**Time Formats**  
Splunk Show displays time in either 12 or 24 hour format, according to your OS and browser settings. If you wish to change from one format to another please adjust these settings in your OS/browser.

## Demo Details
<img src="/splunk-show-docs/images/demo_details.png" alt="my_page" style="width: 50%; height: auto; display: block; margin: 0;">

* **Shared demo** - select whether this demo will be shared with other Splunk Show users. Enabling this will make this demo visible to all Splunk Show users under the **Shared** demos section. (see [Shared Demos](/demos/shared-demos/)). If your demo has been linked to a Salesforce record and you toggle this Shared demo switch on, an advisory message will appear warning you that this is not recommended due to potential impact to customer activities. You can continue with sharing but at your own risk.

{{% notice style="info" title="Shared Demos" %}}
Shared demos are visible and accessible to all Splunk Show users. Their lifetime (TTL) can also be extended by anyone, though only the creator is able to stop them.
{{% /notice %}}

* **Region** - the AWS region that your instance will be provisioned in. Defaults to **North Virginia** but the default setting can be adjusted under Account Settings > Preferences > Preferred Region.

## Total Cost to Splunk

{{% notice style="important" title="Running Costs" %}}
Running costs are displayed purely for informational purposes - there is no charge for running instances in Splunk Show.
{{% /notice %}}

* **Total Cost to Splunk** - an estimated cost per instance (to Splunk) of running the demo with the current settings. Reduce this number by customising the **Runtime** settings where possible (see below).
* **New Demo** - button to create your demo once all mandatory fields on this page have been completed.
