---
title: "Managing Normal Workshops"
weight: 20
---

<!-- # Managing a Workshop -->

## Managing a 'Normal Workshop'

To manage a 'Normal workshop' (i.e. not an event), locate the workshop on the home page under **My instances** and click on the workshop.

When managing a workshop the same base options apply as when managing demo instances (see [Managing Demos](/demos/managing-demos/).)

<figure style="max-width: 25%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/my_instances_normal_workshop.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Normal workshop in My instances
  </figcaption>
</figure>

{{% notice info %}}
### Obtain a List of Instances for a Normal Workshop

Since a workshop typically consists of multiple Splunk instances, you will need to access and distribute the connection details to workshop attendees. Download the list of instances by browsing to your workshop's management page and clicking on the **CSV** button under the **Resources** section.

**Note:** The workshop instances must be running for the CSV export option to be available. This is due to the backend IP addresses changing when instances are paused and resumed.
{{% /notice %}}

<figure style="max-width: 80%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/resources.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Example of downloading a CSV list of instance for a Normal workshop
  </figcaption>
</figure>

<figure style="max-width: 80%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/csv_workshop.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Example CSV export of workshop instances
  </figcaption>
</figure>

{{% notice tip %}}
**Is Your Workshop an 'Event'?**  
If you're running a workshop event, attendees will be able to access their own instance information directly in Show - you do not need to share their connection details manually (see [Events](/workshops/manage-events/).)
{{% /notice %}}

### Resources

This section of the page allows you to view and manage your workshop instances.

To **view a list of workshop instances** - click on **Manage instances.**

A list of instances will appear showing the status of each instance. Click on **Go to instance** to access the instance.

<figure style="max-width: 100%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/manage_instances.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Example list of instances in a ‘Normal workshop’
  </figcaption>
</figure>

Click on the name of an instance to view detailed information including:

* **Connection information** - connection information such as login credentials for the instance

<figure style="max-width: 100%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/connection_info_workshop.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Example of instance information displayed when you click on an instance in the ‘Manage Instances’ list
  </figcaption>
</figure>

* **Instance utilization** - system metrics for the instance such as memory, CPU and disk usage.

<figure style="max-width: 100%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/instance_utilization.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Example of utilization metrics for a workshop instance
  </figcaption>
</figure>

### Add More Workshop Instances

To Increase or decrease the number of required workshop instances edit the **Instances quantity** value.

Edit the quantity and click the green tick button to save the changes.

<figure style="max-width: 100%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/resources_instance_quantity.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Instances quantity settings
  </figcaption>
</figure>

### Monitoring Workshop Instances

{{% notice info %}}
**Initial Feature Release - March 2025**  
This feature is initially only available for the **Splunk4Rookies** workshop template while we test the feature and get feedback from users
{{% /notice %}}

For templates that include a 'Splunk Show Workshop Monitor' instance, workshop/event managers will see an additional **Admin Resources** section on the workshop page, containing a single _Splunk Show Workshop Monitor_ instance. **Monitoring instances are only visible to managers and attendees do not see them.**

<figure style="max-width: 80%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/admin_resources.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Example of a Splunk Show Workshop Monitor instance
  </figcaption>
</figure>

<figure style="max-width: 80%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/connection_info_workshop_monitor.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Workshop monitor connection information
  </figcaption>
</figure>

#### Using Splunk Show Workshop Monitor

All attendee instances will automatically forward their internal logs to the monitoring instance, allowing you to view insights around the engagement of workshop attendees from a single dashboard.

Login to the Splunk Show Workshop Monitor using the credentials provided and you will see the analytics dashboard.

<figure style="max-width: 100%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/show_workshop_monitor.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Workshop insights are provided via the Splunk Show Workshop Monitor instance
  </figcaption>
</figure>

## Managing an Event

See the [Events](/workshops/manage-events/) section for detailed information on managing workshop events.
