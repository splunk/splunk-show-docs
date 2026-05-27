---
title: "Shared Demos"
weight: 40
---

<!-- # Shared Demos -->

Shared demos are on-demand demo instances that requestors have marked as "shared" (see [Creating Demos](/demos/creating-demos/#demo-details).) This option provides users with quick access to provisioned demos where you would otherwise have to wait for the instance to provision.

You can find shared demos on the **Catalog** page by filtering for 'Shared Demo'.

{{% notice note %}}
**Shared Demo Best Practices**  
As a best practice, **do not modify the content of shared demos**. Since any number of users may be leveraging the demo at any given time, it is best to keep it as standard as possible.

If you need to customise the demo content for a customer, you should request a new instance (see [Creating Demos](/demos/creating-demos/).)
{{% /notice %}}

<figure style="max-width: 100%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/shared_demos.png" alt="Example of shared demos displayed on the filtered Catalog page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Example of shared demos displayed on the filtered Catalog page
  </figcaption>
</figure>

To leverage a shared demo, click on the demo and add an activity to reveal the user credentials for the instance.

<img src="/splunk-show-docs/images/add_activity.png" alt="my_page" style="width: 15%; height: auto; display: block; margin: 0;">

Connection information is displayed once you add an activity.

<div style="display: flex; gap: 1rem; align-items: stretch; margin-bottom: 1rem;">
  <figure style="width: 48%; margin: 0; display: flex; flex-direction: column; align-items: center;">
    <img src="/splunk-show-docs/images/connection_info_shared_blurred.png" alt="Example of blurred connection information on a shared demo" style="width: 100%; height: auto; display: block; flex-shrink: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Example of blurred connection information on a shared demo
    </figcaption>
  </figure>
  <figure style="width: 48%; margin: 0; display: flex; flex-direction: column; align-items: center;">
    <img src="/splunk-show-docs/images/connection_info_shared_revealed.png" alt="Connection information is revealed when you add an activity" style="width: 100%; height: auto; display: block; flex-shrink: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Connection information is revealed when you add an activity
    </figcaption>
  </figure>
</div>
