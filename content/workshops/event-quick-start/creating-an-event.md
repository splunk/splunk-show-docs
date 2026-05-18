+++
title = "Quick Start: Creating an Event"
weight = 30
+++

{{% notice note %}}
The steps on this page are simplified. Please see the [Creating a Workshop/Event](/workshops/creating-workshops/) for complete details of all possible available configuration options.
{{% /notice %}}

## Steps

### 1. Navigate to Create Workshop

Log in to [Splunk Show](https://show.splunk.com) and [find the workshop template you need](/finding-content). Click on **Launch instance** (if browsing via the Catalog page) or **New workshop** (if you're on the template page).

<figure style="max-width: 100%; margin: 0 0 1rem 0;">
  <img src="/images/new_workshop_button.png" alt="The New Workshop button on the template page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    The New Workshop button on the template page
  </figcaption>
</figure>

<figure style="max-width: 100%; margin: 0 0 1rem 0;">
  <img src="/images/launch_instance_button.png" alt="The Launch Instance button on the Catalog page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    The Launch Instance button on the Catalog page
  </figcaption>
</figure>

### 2. Complete the Configuration Form

Pay special attention to the following options:

##### Use Case

For customer workshops always tie your request to a Salesforce account, opportunity, campaign or SESR.

##### Runtime

- **Lifetime** - the instance Time to Live (TTL), i.e. how long your instances will run for once they're provisioned. Default is 8 hours.
- **Operating hours** - the hours of the day when your instances will be running. Outside these hours the instances will suspend. Default is 08:00–18:00 in your local timezone.

##### Workshop Type

Choose either **Private event** or **Public event** depending on which one you need (see [this flowchart](../choosing-workshop-type/)).

##### Provisioning Start

The date/time when Splunk Show should start provisioning the instances (see [Provisioning Start](/workshops/creating-workshops/#provisioning-time) for more info). 

{{% notice warning %}}
The instance **Lifetime** starts ticking from this date/time, so adjust the lifetime accordingly.
{{% /notice %}}

{{% notice tip %}}
Set this for **at least 1 hour before your Event Start time** to allow the instances to be up and settled before you start your workshop.
{{% /notice %}}

##### Event Start

The date/time when enrolled participants will be allowed to access the event in Show. Once opened, participants will be able to see the access details for their assigned instance.

{{% notice tip %}}
Set this to be the time when your workshop is scheduled to kick off. If you want attendees to be able to join a little earlier to get logged in to Splunk then adjust this time to be earlier accordingly.
{{% /notice %}}

##### Instances

- **Set participants quantity manually** (optional)

    Selecting this will allow you to manually set the _Estimated participants_ and workshop instance values. Doing so allows you to specify how many instances you want Splunk Show to provision up front (at the _Provisioning Start_ time you set above). This allows you to have a set number of instances available to assign to users as they enroll in the event. As users enrol, Show will assign them one of the pre-provisioned instances. If you do not use this setting, then Show will provision instances on-demand as users enroll (the default behaviour.)

{{% notice tip %}}
For large workshops (50+ participants) using this option will likely reduce the waiting time for instance provisioning during the workshop itself.
{{% /notice %}}

##### Termination Time

When a user enrols in the event they are allocated an instance. To save running costs, any 'unassigned' instances that have not been allocated to a user during the enrolment process will be **automatically terminated after the time period you set here**. 

{{% notice warning %}}
To avoid instances being terminated during the workshop, **ensure your attendees have enrolled in the event** using either a splunk.com account or a passcode.
{{% /notice %}}

{{% notice info %}}
If you intend on just sharing the instance details with your participants via a CSV list (i.e. not having them enrol in an event via Splunk Show) then we recommend you run your workshop as a '[Normal Workshop](/workshops/creating-workshops)' and not an event.
{{% /notice %}}

##### Allow Anonymous Enrolment via Passcode

<span class=conditional-note>(Applies to events only)</span> [Enable this option](/workshops/manage-events/#managing-anonymous-enrolment-via-passcode) to allow attendees to enrol in your event anonymously using a Show-generated passcode, rather than a splunk.com account. 

### 3. Review and Create

Review your settings and click **Create.**

You can now start [inviting your attendees](../inviting-attendees/)!
