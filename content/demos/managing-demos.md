---
title: "Managing a Demo"
weight: 20
---

<!-- # Managing a Demo -->

To manage a demo, locate the requested demo on the home page under **My instances** and click on the requested demo.

<figure style="max-width: 60%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/my_instances_demo.png" alt="Click on a demo to access the management view" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Click on a demo to access the management view
  </figcaption>
</figure>

You will be presented with the management page for your demo.

<figure style="max-width: 100%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/manage_demo.png" alt="Example of a management page for a running demo" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Example of a management page for a running demo
  </figcaption>
</figure>

Much of this page is self explanatory but please note the following options:

## Quick Actions

- [Extend Instances](#extend-instances-change-lifetime)
- [Pause Instances](#pause-instances)
- [Resume Instances](#resume-a-paused-instance)
- [Reboot Instances](#reboot-instances)
- [Transfer Ownership](#transfer-ownership)
- [Add Data Bundles](#add-more-data-sources-to-your-demo-data-bundles)
- [Access Connection Info](#accessing-demo-connection-information)

## Extend Instances (Change lifetime)
<img src="/splunk-show-docs/images/change_lifetime.png" alt="my_page" style="width: 20%; height: auto; display: block; margin: 0;">

Extend an instance by using the **Change lifetime** option. When extending instances, the status of the demo/workshop will briefly change to PENDING while the lifetime value is updated, and will return to the RUNNING state when the extension is complete.

<figure style="max-width: 50%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/change_lifetime_window.png" alt="Select a new termination date for your instances using the Change lifetime option" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Select a new termination date for your instances using the Change lifetime option
  </figcaption>
</figure>

The normal process of extending up to 14 days for SFDC activities has not changed, however, a new range will now appear in the time picker that expands outside of the "allowed" range that will send an approval request directly to your manager via email. Access to Show is not a requirement for your manager to accept or reject the request. The maximum extension period is 14 days from the day you request.

If your manager is not available to approve an extension you can extend 1 day at a time without approval - this can help if an extension is needed at short notice. If your manager is away for a longer period and so cannot approve a longer extension any time soon, please reach out to us via the [#splunk-show](https://splunk.enterprise.slack.com/archives/C02EQU3B9HR) Slack channel for guidance.

{{% notice info %}}
**14 day Limit for Extending Cloud Instances**  
Cloud-based demos - such as those which leverage Splunk Cloud Platform, SOAR or Splunk Cloud Services (SCS) - can only be extended a maximum of 14 days each time. While there is no limit to the number of times you can extend a Cloud instance, you can only do so in 14 day increments.
{{% /notice %}}

## Pause Instances
<img src="/splunk-show-docs/images/pause.png" alt="my_page" style="width: 12%; height: auto; display: block; margin: 0;">

<span class="conditional-note">(Only available for Splunk Enterprise instances)</span> Use the **Pause** option to temporarily pause the instance(s). This will put the demo into a SUSPENDED state.

When suspended, the instance is taken offline and will not be accessible until it is restarted. This is particularly useful in cases where demos or workshops don't complete in the initial meeting and are required for a follow-up, but aren't needed in between. A great use case here would be for running customer workshops where only part of the work gets completed. The instances can be suspended and then restarted when it is time to meet with the customer again.

## Resume a Paused Instance
<img src="/splunk-show-docs/images/resume.png" alt="my_page" style="width: 12%; height: auto; display: block; margin: 0;">

When a demo instance is paused (i.e. a "SUSPENDED" state) the **Pause** option will be replaced with a **Resume** option. Click on this button to unpause/resume your demo. Doing so will override the runtime schedule that you set for your demo and will bring your instance back online. Note that Show will still pause/suspend your instance when it reaches the next suspend time as outlined in your runtime schedule.

For example: If your demo is set to run 09.00–18.00 for several days it will suspend at 18.00 each day. If you were to manually resume the stack in the evening on one of those days the demo will come back to a RUNNING state and will continue to run through until 18.00 the next day when Show will suspend again as per the schedule.

{{% notice info %}}
**Running Costs** 💸  
A paused instance only incurs a minimal cost for the storage volume, saving 99% over a running instance in most cases!
{{% /notice %}}

{{% notice info %}}
**Instance Control Considerations**

* If you need to access an instance outside of the scheduled operating hours, there are two options:
  * **Manually resume the instance** - Pausing an instance within the scheduled operating hours will put it into a suspended state until the next scheduled start time. The opposite is the case as well: resuming/unpausing an instance outside of the operating hours will leave it online until the next scheduled stop time.
  * **Use Run Always (24/7)** - If you need to have full control of the instance schedule, you can change to Run Always (24/7) to remove the schedule completely. You can set this either during the creation step or after the instance is online.
* A paused instance will not run any associated datagen, meaning when the instance comes back online, there is likely going to be gaps in the dashboards for the time it was suspended. While this will affect some demos and workshops, it will not affect those with static datasets, or those that run bulk backfills on startup.
{{% /notice %}}

## Reboot Instances
<img src="/splunk-show-docs/images/reboot.png" alt="my_page" style="width: 15%; height: auto; display: block; margin: 0;">

<span class="conditional-note">(Only available for Splunk Enterprise instances)</span> Splunk Enterprise-based demo instances can be rebooted at any point from the moment you request them. This applies to both the provisioning process (i.e. if the stacks errors out or is stuck in STARTING for a long time) and also if the instance is already RUNNING but has become unresponsive.

To reboot a demo instance navigate to the demo's management page and click **Reboot**.

## Transfer Ownership
<img src="/splunk-show-docs/images/transfer_ownership.png" alt="my_page" style="width: 25%; height: auto; display: block; margin: 0;">

You can transfer the ownership of a demo or workshop instance to another user of Splunk Show. A transfer request is then sent to the requested new owner where they can accept or reject the transfer.

<figure style="max-width: 40%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/transfer_ownership_window.png" alt="Enter the new user's email to transfer ownership" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Enter the new user’s email to transfer ownership
  </figcaption>
</figure>

## Add More Data Sources to Your Demo (Data Bundles)
<img src="/splunk-show-docs/images/add_data_bundles.png" alt="my_page" style="width: 25%; height: auto; display: block; margin: 0;">

Data bundles are datasets that you can add to your demo instance. Examples include:

* AWS Content Pack
* Microsoft Azure Content Pack
* Palo Alto App Dashboard Samples
* Unix-Linux Infrastructure Overview for IT Essentials Work
* Windows Content Pack Dashboard Samples

Data is sent to instances using Splunk's HTTP Event Collector (HEC).

### Activate a Data Bundle

To activate a data bundle, browse to the management page of your running demo (i.e. click on the running demo from the home page) and click **+ Add data bundles**. This will display the **Add data** page.

{{% notice info %}}
**Add data bundle option greyed out?**  
Instances must be in a RUNNING state to access the **+ Add data bundles** option. If your instance is still in provisioning or is currently rebooting then this option will be greyed out.
{{% /notice %}}

<figure style="max-width: 100%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/add_data.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Example of adding data bundles to a RUNNING demo instance
  </figcaption>
</figure>

* **Test HEC connection** - click this button to test the preconfigured HEC endpoint and token. A green tick will appear to indicate that HEC is configured and working.
<img src="/splunk-show-docs/images/test_hec_connection.png" alt="my_page" style="width: 30%; height: auto; display: block; margin: 0;">


* **Advance configuration** - click this button to view HEC information and customisation options

  <figure style="max-width: 80%; margin: 0 0 1rem 0;">
    <img src="/splunk-show-docs/images/add_data_advance_config.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Viewing HEC advanced configuration options
    </figcaption>
  </figure>

  * **HEC URL** - the HEC endpoint for the instance. You can optionally edit the endpoint URL if required, e.g. if you wish to send raw data to this endpoint.
  * **HEC token** - the preconfigured HEC token for this instance. This can optionally be edited if you wish to use a different HEC token for this data bundle (you will need to create the new token yourself before activating the data bundle.)
  * **Index override (optional)** - if you wish to override the index that the data will be sent to enter the name of the index here. If this field is blank the data will be stored in the index(es) defined in the data bundle.

* **Activate datasets** - the available data bundles.

  Type keywords into the search bar to search the available data bundles.
  <figure style="max-width: 80%; margin: 0 0 1rem 0;">
    <img src="/splunk-show-docs/images/data_bundle_keyword.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Data bundle keyword search
    </figcaption>
  </figure>

  Click on a data bundle tile to view detailed information about app dependencies and any additional setup required, such as any indexes you need to create. Be sure to follow these instructions to ensure that the data onboards correctly!
  <figure style="max-width: 100%; margin: 0 0 1rem 0;">
    <img src="/splunk-show-docs/images/data_bundle_example.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Example of a data bundle, containing setup information
    </figcaption>
  </figure>

**App dependencies** - click on **Install** to view the app within Splunk's native app installation view.

<figure style="max-width: 80%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/browse_more_apps.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    BClicking on ‘Install’ for an app dependency will take you to your Splunk instance and populate the app in the search box
  </figcaption>
</figure>

Click on **View on Splunkbase** to navigate to the app's Splunkbase page where you can find more information about the app and also download it locally.

To activate a data bundle, toggle the **Activate** check box on the tile and click the **Activate x datasets** button in the top right to apply your changes.
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
  <img src="/splunk-show-docs/images/data_bundle_activate.png" alt="Grouped Resources 1" style="width: 80%; height: auto;">
  <img src="/splunk-show-docs/images/data_bundle_activate_button.png" alt="Grouped Resources 2" style="width: 80%; height: auto;">
</div>

{{% notice info %}}
**Activating and Deactivating Data Bundles**  
Due to the way data bundles work, when you activate or deactivate a data bundle your instance will temporarily display as STARTING in Show. Your instance should show as RUNNING after the changes have been made.
{{% /notice %}}

{{% notice note %}}
**Data Bundle Setup**  
Please note that activating a data bundle in Show is just one step in the process - you will need to install the required apps/TAs and create indexes in order for the data to ingest correctly!

Check the details for each data bundle when activating it to make sure you have all the prerequisites complete!
{{% /notice %}}

### Managing Active Data Bundles

When you add one or more data bundles to a demo you will see a **Data Sources** section on the management page for your demo.

<figure style="max-width: 80%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/data_sources.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    A Data Sources section is added to your demo page when you add data bundles
  </figcaption>
</figure>

{{% notice note %}}
**Need to Edit a Data Bundle?**  
You cannot edit a data bundle once it is active.
{{% /notice %}}

If you need to edit a data bundle - such as to change the HEC token information - you need to deactivate the data bundle entirely and add a new one (see [Activate a Data Bundle](#activate-a-data-bundle).)

## Accessing Demo Connection Information

Locate the requested demo you need to access on the home page under **My instances** and click on the demo. This will bring up the demo management page. Scroll down to the **Connection** or **Instances** section to view the connection URLs, usernames and passwords for your demo.

<figure style="max-width: 80%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/connection_info.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Example of connection information for a demo instance
  </figcaption>
</figure>

For demos that feature multiple instances, this section will be called **Instances** and will display a tile for each instance. Clicking on the instance tile will present you with the full connection information for that instance.

<div style="display: flex; gap: 1rem; align-items: stretch; margin-bottom: 1rem;">
  <figure style="width: 48%; margin: 0; display: flex; flex-direction: column; align-items: center;">
    <img src="/splunk-show-docs/images/multiple_instances.png" alt="Grouped Resources 1" style="width: 100%; height: auto; display: block; flex-shrink: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Example of a demo with multiple instances
    </figcaption>
  </figure>
  <figure style="width: 48%; margin: 0; display: flex; flex-direction: column; align-items: center;">
    <img src="/splunk-show-docs/images/multiple_instances_connection_info.png" alt="Grouped Resources 2" style="width: 100%; height: auto; display: block; flex-shrink: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      In a demo with multiple instances, click on the tile to view connection information for that instance
    </figcaption>
  </figure>
</div>
