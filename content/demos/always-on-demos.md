---
title: "Always-On (Static) Demos"
weight: 30
---

<!-- # Always On (Static) Demos -->

Always on (formerly referred to as "static") demo instances are environments that are always running and can be accessed immediately. You can view the list of always on demos from the **Catalog** page by navigating to the "Request" dropdown and selecting "Always On" demos.

<figure style="max-width: 100%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/always_on_demos.png" alt="Use the Request filter to view only always on demos" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Use the Request filter to view only always on demos
  </figcaption>
</figure>

{{% notice style="info" title="User Permissions for Always On Demos" %}}
Since always on demos are shared environments, user permissions are typically restricted to prevent accidental changes that could impact other users. If you need to make changes or customise a demo in any way you should leverage an on-demand demo (see [Creating Demos](/demos/creating-demos/).)
{{% /notice %}} 

To access an always on demo, either expand the demo using the arrow and click on "Use Instance" or simply click on the demo name. 

<figure style="width: 80%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/use_instance.png" alt="Click on Use Instance" style="width: 100%; height: auto; display: block;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Click on the Use Instance button or simply click on the name of the demo itself
  </figcaption>
</figure>

You will need to add at least one activity before the connection details become available to you. Click on either **Add activity** or **+ New activity** at the bottom of the page to add an activity and reveal the connection information (see [Creating Demos](/demos/creating-demos/#use-case) for information on the activity types.)

<figure style="max-width: 80%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/add_activity_template_page.png" alt="Click the Add Activity button to use an always on demo" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    "Click the Add Activity button to use an always on demo
  </figcaption>
</figure>

<div style="display: flex; gap: 1rem; align-items: stretch; margin-bottom: 1rem;">
  <figure style="width: 48%; margin: 0; display: flex; flex-direction: column; align-items: center;">
    <img src="/splunk-show-docs/images/connection_info_always_on_blurred.png" alt="Example of blurred connection information on an always on demo" style="width: 100%; height: auto; display: block; flex-shrink: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Example of blurred connection information on an always on demo
    </figcaption>
  </figure>
  <figure style="width: 48%; margin: 0; display: flex; flex-direction: column; align-items: center;">
    <img src="/splunk-show-docs/images/connection_info_always_on_revealed.png" alt="Connection information is revealed when you add an activity" style="width: 100%; height: auto; display: block; flex-shrink: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Connection information is revealed when you add an activity
    </figcaption>
  </figure>
</div>
