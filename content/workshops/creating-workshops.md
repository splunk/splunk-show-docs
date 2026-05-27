---
title: "Creating a Workshop/Event"
weight: 10
---

<!-- # Creating a Workshop/Event (Create Workshop Page) -->

Workshops are designed as hands-on environments for groups of participants, led by Splunkers and Technical Partners. An 'event' is a type of workshop in Splunk Show that requires users to enrol in the workshop using a splunk.com account and provides a self-service method for participants to access their workshop instance information.

{{% notice info %}}
**Running and event and short on time?** 

Check out the [Splunk Show Event Quick Start Guide](/workshops/event-quick-start/) to get up and running quickly!
{{% /notice %}}

When you click on the **New workshop** button for a workshop template you are taken to the **Create workshop** page with the following options available to you:

## New workshop or event

<img src="/splunk-show-docs/images/new_workshop.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">

* **Name** - the customisable name of the demo instance
* **Custom notes** - a free text field for any notes related to this workshop (URLs will be detected and made clickable). If you're creating a workshop event then these notes will be visible to enrolled users on the events page.

{{% notice tip %}}
**Custom Notes Tip**: Enter useful workshop resource URLs to help your attendees!
{{% /notice %}}

<figure style="max-width: 80%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/event_notes.png" alt="Example of what workshop attendees will see when you add a custom note to an event" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Example of what workshop attendees will see when you add a custom note to an event
  </figcaption>
</figure>

## Use Case

The reason for the workshop, which has the following options (Please expand the section relevant to your role):
<img src="/splunk-show-docs/images/use_case.png" alt="my_page" style="width: 80%; height: auto; display: block; margin: 0;">

{{% expand title="Splunker Options" %}}

* **Type** 

  <figure style="max-width: 40%; margin: 0 0 1rem 0;">
    <img src="/splunk-show-docs/images/use_case_dropdown.png" alt="Options available to Splunkers" style="width: 100%; height: auto; display: block; margin: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Options available to Splunkers
    </figcaption>
  </figure>

* **Salesforce** - the workshop is being spun up for a customer-facing activity related to one of the following Salesforce entities. Please use this option when possible as it helps the team to track the demo instance spend to a specific Salesforce record. Either paste in the SFDC ID for the Account, Opportunity, Campaign, or SESR/INH the workshop will be tied to or alternatively use the **Advanced search** option to search by name. For more detailed information, see the [Salesforce Integration](/account-settings/salesforce/) section.

  <figure style="max-width: 80%; margin: 0 0 1rem 0;">
    <img src="/splunk-show-docs/images/use_case_sfdc_dropdown.png" alt="Available SFDC record types when using the Advanced search" style="width: 100%; height: auto; display: block; margin: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Available SFDC record types when using the Advanced search
    </figcaption>
  </figure>

  * Account
  * Opportunity
  * Campaign
  * Sales Engineer Support Request (SESR) / I Need Help (INH) Request

* **Training** - <span class="restriction-note">(not suitable for customer facing activities)</span> the workshop is for enablement/learning purposes. When you select Training the following limits will apply:
  * You will be <span class="text-red">limited to only 1 instance per demo/workshop template</span> in Show
  * You will be <span class="text-red">limited to a maximum runtime of 1 day.</span>
* **Internal (Splunk)** - (not suitable for customer facing activities) the workshop is for **internal testing only**.

{{% /expand %}}

{{% expand title="Partner Options" %}}

* **Type** 

  <figure style="max-width: 40%; margin: 0 0 1rem 0;">
    <img src="/splunk-show-docs/images/use_case_dropdown_partner.png" alt="Options available to partners" style="width: 100%; height: auto; display: block; margin: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Options available to partners
    </figcaption>
  </figure>

* **Salesforce** - the workshop is being spun up for a customer-facing activity related to one of the following Salesforce entities. Please use this option when possible as it helps the team to tie content usage to a specific customer.

  <img src="/splunk-show-docs/images/use_case_sfdc_dropdown_partner.png" alt="my_page" style="width: 80%; height: auto; display: block; margin: 0;">

  * **ID Type**
    * Account
    * Opportunity
  * **ID Number** - Simply enter the name of the customer you are running the workshop for - <span class="text-red">no formal Salesforce ID is required</span>.

* **Training** - <span class="restriction-note">(not suitable for customer facing activities)</span> the workshop is for enablement/learning purposes. When you select Training the following limits will apply:
  * You will be <span class="text-red">limited to only 1 instance per demo/workshop template</span> in Show
  * You will be <span class="text-red">limited to a maximum runtime of 1 day.</span>

{{% /expand %}}

## Network

<img src="/splunk-show-docs/images/network_workshop.png" alt="my_page" style="width: 80%; height: auto; display: block; margin: 0;">

* **DNS Prefix** - a customisable label that will be included in the DNS records and instance URLs for this workshop. This helps organize the instance URLs once provisioned. For example, entering `abc` as the prefix will result in instance URLs that looks like this:  
  `https://abc-i-08115630654cebf93.splunk.show`
* **SSH Access** - (only available on some Some Enterprise based templates) Uncommon for workshops but is required in a select few where SSH access is part of the exercises and has also been authorized by the workshop owner. Where SSH is required for the workshop it will be enabled, otherwise this option will typically be disabled and unavailable for workshops.

## Runtime

<img src="/splunk-show-docs/images/runtime_workshop.png" alt="my_page" style="width: 80%; height: auto; display: block; margin: 0;">

* **Lifetime** - the Time-to-Live (TTL) for your workshop instances (minimum of 2 hours, maximum of 14 days.)

  **Note:** If you select 'Training' for your use case you will be limited to a maximum lifetime of 1 day. If you need the workshop to run for longer, enter a Salesforce activity for the use case.

* **Operating hours** - (can only be changed on Splunk Enterprise based templates) this allows you to create a custom schedule for the instance, selecting the days and time window you would like to have the instance available. Once selected, Splunk Show will automatically pause/restart the instance at the scheduled time.

  <img src="/splunk-show-docs/images/operating_hours.png" alt="my_page" style="width: 50%; height: auto; display: block; margin: 0;">

  The available time window selections are:

  * **System default operating hours** - this is the default choice, which will set a typical business hour schedule from 8:00AM-6:00PM localized for your timezone (as reported by the browser).
  * **User default operating hours** - Within Account Settings > Preferences > Scheduled Instances, there is a place to set a user-defined schedule if you operate outside of typical business hours, or have use cases that require different time windows.
  * **Custom operating hours** - this option is to set a schedule for that specific instance in cases where a one-off schedule is required.
  * **Run always (24/7)** - the instance will not follow a schedule and will remain online the entire specified time.

{{% notice info %}}
**Splunk Cloud based templates**  
Splunk Cloud instances must run 24/7 and their operating hours cannot be customized. This is noted within the Splunk Show UI.
{{% /notice %}}

## Template fields

<figure style="max-width: 50%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/template_fields.png" alt="Template fields" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Template fields
  </figcaption>
</figure>

Some templates include the option for a 'Workshop Monitor' instance. If this option exists you will see a dropdown option where you can choose whether to include one.

Splunk Show Workshop monitor provides a quick view into your workshop instances and helps you to see how engaged attendees are in using the environment.

{{% notice info %}}
**Using Workshop Monitor**  
For more information on this feature please see [Monitoring Workshop Instances](/workshops/managing-workshops/#monitoring-workshop-instances)
{{% /notice %}}

## Workshop type

<figure style="max-width: 80%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/workshop_type.png" alt="There are three workshop types available in Show" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    There are three workshop types available in Show
  </figcaption>
</figure>

This section allows you select what type of workshop you want to run. The following options are available:

* **Normal**

  <img src="/splunk-show-docs/images/workshop_type_normal.png" alt="my_page" style="width: 40%; height: auto; display: block; margin: 0;">
  
  A "traditional" workshop where you request a specific number of workshop instances up front. <span class="text-red">No Splunk.com account is required.</span> Once provisioned, instance details and access information must be [downloaded as a csv file](/workshops/managing-workshops/#obtain-a-list-of-instances-for-a-normal-workshop) for distribution to participants of the workshop. No record of participants is kept by Show (as there is no enrolment) - it's all down to you!

  {{% notice tip %}}
  **Ideal for:** "Old school" workshops where you're happy to manually manage instances and hand out credentials to participants.
  {{% /notice %}}

* **Private Event**

  <img src="/splunk-show-docs/images/workshop_type_private_event.png" alt="my_page" style="width: 40%; height: auto; display: block; margin: 0;">

  A workshop that allows you to invite participants to an 'event' within Splunk Show. <span class="text-red">A Splunk.com account is required. Enable 'Allow anonymous Enrolment via Passcode' at the bottom of the *Create workshop* if you need to allow users to enrol without a Splunk.com account.</span> Invited participants can either use a direct link to access and enrol in the workshop event or you can invite them individually via their email address. When you use the email invite method invitees will receive an email to enrol in the event. You will also get a CSV list of enrolled users at the end of the workshop.

  On the day of the event, instances will be spun up and participants can log in to Show (using their splunk.com account) to access their assigned instance information.

  {{% notice tip %}}
  **Ideal for:** Workshops where you want to limit enrolments to only those who have the event link or who have been directly invited.
  {{% /notice %}}

* **Public Event**

  <img src="/splunk-show-docs/images/workshop_type_public_event.png" alt="my_page" style="width: 40%; height: auto; display: block; margin: 0;">

  Similar to private events but requires no invitation as anyone who logs in to Splunk Show (using a Splunk.com account) can see and enrol in the workshop event. <span class="text-red">A Splunk.com account is required. Enable 'Allow anonymous Enrolment via Passcode' at the bottom of the *Create workshop* page if you need to allow users to enrol without a Splunk.com account.</span> You will also get a CSV list of enrolled users at the end of the workshop (passcode authenticated users will appear as anonymous users.

  {{% notice tip %}}
  **Ideal for:** Public workshops/events where you want to allow open enrolments.
  {{% /notice %}}

  {{% notice note %}}
  **Splunk.com Accounts**  
  For further guidance on customer sign ups at Splunk.com please see [Splunk.com Registration Best Practices](https://splk.it/RegistrationBestPractices).

  **Splunkers:** If customers have followed the registration best practices above and still experience registration messages such as the one in the screenshot below please reach out to #dpl-screening-issues in Slack for support.

  <figure style="max-width: 100%; margin: 0 0 1rem 0;">
    <img src="/splunk-show-docs/images/sign_up_message.png" alt="Example screening message during a splunk.com account registration" style="width: 100%; height: auto; display: block; margin: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Example screening message during a splunk.com account registration
    </figcaption>
  </figure>

  {{% /notice %}}
  
  {{% expand title="Choosing a Workshop Type" %}}
  Follow this flow to decide which workshop format is best for your activity:

  ![decision flow](/splunk-show-docs/images/show_workshop_decision_flow.png)
  {{% /expand %}}

### Provisioning time
<img src="/splunk-show-docs/images/provisioning_time.png" alt="my_page" style="width: 80%; height: auto; display: block; margin: 0;">

* **Provisioning Start** - the date/time when the instances should be provisioned by the system. Consider the number of instances and average provisioning time for the given template when selecting how far in advance you want the provisioning to start.
  * **Now** - your instance(s) will be provisioned immediately
  * **Future** - your instance(s) will be provisioned at the date and time specified.
* **Event Start** - (applies to events only) the date/time when enrolled participants will be allowed to access the event. After the Event Start date/time, participants will be able to see the access details for their assigned workshop instance.

  {{% notice info %}}
  **Time Formats**  
  Splunk Show displays time in either 12 or 24 hour format, according to your OS and browser settings. If you wish to change from one format to another please adjust these settings in your OS/browser.
  {{% /notice %}}

### Instances

* **Set participants quantity manually** - <span class="conditional-note">(applies to events only)</span> selecting this will allow you to manually set the _Estimated participants_ and workshop instance values. Doing so allows you to specify how many instances you want Splunk Show to provision up front (at the _Provisioning Start_ time). This allows you to have a set number of instances available to assign to users as they enroll in the event either right before or during the workshop. For large workshops (50+ participants) this option will likely reduce the waiting time for instance provisioning during the workshop itself.

  {{% notice important %}}
  **Important Notes About Using This Setting:**

  * By default any unassigned instances that have not been allocated to a user during the enrolment process will be automatically terminated 1 hour after the _Event Start_ time to save costs. To avoid this happening, **you must get your attendees to enrol in the event** or extend the time using the Termination Time dropdown (see below for more info).
  * If you intend on just sharing the instance details with your participants via a CSV list (i.e. not having them enrol in an event via Splunk Show) then you should run your workshop as a 'Normal workshop' and not an event.
  {{% /notice %}}

* **Estimated Participants** - <span class="conditional-note">(available only when 'Set participants quantity manually' is checked)</span> the number of estimated participants for this workshop. Once entered, Splunk Show will calculate the required number of each instance, which can be increased or decreased manually.
* **Region** - the AWS region where the instances will be spun up and hosted. Currently, all instances for a workshop must be located in the same region.
* **Termination Time** - This option allows you to control how long unallocated instances will run for before Show automatically terminates them 

  {{% notice note %}}
  When attendees enrol in a Splunk Show event they are allocated a workshop instance. The Termination Time setting will only impact users who **don't** enrol.
  {{% /notice %}}
  <figure style="max-width: 50%; margin: 0 0 1rem 0;">
    <img src="/splunk-show-docs/images/termination_time.png" alt="Set how long you want unallocated instances to run for before Show terminates them" style="width: 100%; height: auto; display: block; margin: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Set how long you want unallocated instances to run for before Show terminates them
    </figcaption>
  </figure>

* **Receive an email with the participants at the end of the event** - this option is enabled by default. With this option selected you will automatically receive an email when the event has ended, containing a CSV list of your event participants.
  
  <div style="display: flex; gap: 1rem; align-items: stretch; margin-bottom: 1rem;">
    <figure style="width: 48%; margin: 0; display: flex; flex-direction: column; align-items: center;">
    <img src="/splunk-show-docs/images/participant_list_email.png" alt="Example of a participants list email" style="width: 100%; height: auto; display: block; flex-shrink: 0;">
      <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
        Example of a participants list email
      </figcaption>
    </figure>
    <figure style="width: 48%; margin: 0; display: flex; flex-direction: column; align-items: center;">
    <img src="/splunk-show-docs/images/participant_csv.png" alt="Example of a participants list in CSV format" style="width: 100%; height: auto; display: block; flex-shrink: 0;">
      <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
        Example of a participants list in CSV format
      </figcaption>
    </figure>
  </div>

* **Allow Anonymous Enrollment via Passcode** - <span class="conditional-note">(applies to events only)</span> enable this option to allow attendees to enrol in your event anonymously using a Show-generated passcode, rather than a Splunk.com account. See [Managing Anonymous Enrolment via Passcode](/workshops/manage-events/#managing-anonymous-enrolment-via-passcode) for more information on this feature.

## Review
<figure style="max-width: 100%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/review.png" alt="Carefully review the summary of the workshop before creating it!" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Carefully review the summary of the workshop before creating it!
  </figcaption>
</figure>

Provides a summary of the workshop you are about to create including workshop type, event start and end times, and instance information.

## Total Cost to Splunk
<figure style="max-width: 50%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/total_cost_event.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Total cost estimate
  </figcaption>
</figure>

Indicates the estimated cost per instance (to Splunk) of running the workshop with the current settings.

{{% notice important %}}
Running costs are displayed purely for informational purposes - there is no charge for running instances in Splunk Show.
{{% /notice %}}
