---
title: "Managing Workshop Events"
weight: 30
---

<!-- # Managing Workshop Events -->

To manage a workshop event, locate the event on the home page under **My instances** and click on the event.

<figure style="max-width: 25%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/my_instances_event.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Event in My instances
  </figcaption>
</figure>

In addition to the options available for a 'Normal workshop', events have the following additional options:

<img src="/splunk-show-docs/images/event_link.png" alt="my_page" style="width: 35%; height: auto; display: block; margin: 0;">

* **Event Link** - this is the shareable link to your workshop event. Click this link to visit the event page. Alternatively, click on the copy icon to the right to copy the URL to your clipboard, ready to share with invitees. You can also edit this link via the **Invite people** popup window.

  <img src="/splunk-show-docs/images/event_menu.png" alt="my_page" style="width: 30%; height: auto; display: block; margin: 0;">

* **User notes** - populates the 'Event notes' on the event page. Add any participant-facing notes or links related to this workshop event (URLs will automatically be detected and made clickable).

  <figure style="max-width: 80%; margin: 0 0 1rem 0;">
    <img src="/splunk-show-docs/images/event_notes.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Example of what workshop attendees will see when you add text to the User notes field
    </figcaption>
  </figure> 

  {{% notice tip %}}
  Enter useful workshop resource URLs to help your attendees!
  {{% /notice %}}

* **Event participants** - allows you to manage the participants for your event, including viewing a list of attendees who are either enrolled or invited, inviting additional participants, exporting a CSV list of all participants and accessing participants' instance details.

  <figure style="max-width: 100%; margin: 0 0 1rem 0;">
    <img src="/splunk-show-docs/images/event_participants.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Example of an event participant with both passcode and Splunk.com enrolled users, with a link to each user’s instances
    </figcaption>
  </figure>

  {{% notice info %}}
  **Participants List**  
  You should also automatically receive a list of event participants by leaving 'Receive an email with the participants at the end of the event' enabled when creating your event.
  {{% /notice %}}

* **Event Managers** - allows you to add additional Show users as an event manager. Any users who are added as an event manager will see the event listed under **My instances** on their homepage and will have full access to manage users and workshop instances.

  <figure style="max-width: 100%; margin: 0 0 1rem 0;">
    <img src="/splunk-show-docs/images/event_managers.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Click 'Add managers' to add a colleague to help manage your workshop
    </figcaption>
  </figure>

  <figure style="max-width: 40%; margin: 0 0 1rem 0;">
    <img src="/splunk-show-docs/images/event_add_manager.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Add other Show users as workshop managers
    </figcaption>
  </figure>

* **Manage event privacy** - allows you to switch between making the event a **Public event** or a **Private event** (see [Creating Workshops](/workshops/creating-workshops/#workshop-type) for more info!) You can also copy the direct link to the event (useful for sharing in a calendar invite) to your clipboard and enable/disable the option to allow anyone with the event link to access and enrol in the event.

  <figure style="max-width: 70%; margin: 0 0 1rem 0;">
    <img src="/splunk-show-docs/images/event_privacy.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Switch between a public or private event at any time!
    </figcaption>
  </figure>

* **Invite people** - launches a popup where you can manage the following aspects of your event:
  * **Guests** - enter or paste in a comma-separated list of email addresses (invitees will receive an email from `show@splunk.com`
   with a direct link to the event)
  * **Event Url** - the unique link for your event. Either copy the event link to your clipboard by clicking the copy button or edit the URL by clicking on the on edit button. You can then customise the last part of the URL.
    * **Discard Old Links** - when this option is enabled, Splunk Show will automatically purge/delete the previous custom URL you used. If you disable this option, any custom URLs you have used for this stack will be retained (and will continue to work) until the stack is terminated, at which time the custom URL(s) will be deleted and can be used again by you or someone else.

      <figure style="max-width: 30%; margin: 0 0 1rem 0;">
        <img src="/splunk-show-docs/images/event_custom_url.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
        <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
          You can customise your event URL
        </figcaption>
      </figure>

<div style="display: flex; gap: 1rem; align-items: stretch; margin-bottom: 1rem;">
  <figure style="width: 48%; margin: 0; display: flex; flex-direction: column; align-items: center;">
    <img src="/splunk-show-docs/images/event_invite_people.png" alt="Grouped Resources 1" style="width: 100%; height: auto; display: block; flex-shrink: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Example of inviting two people using their email addresses
    </figcaption>
  </figure>
  <figure style="width: 48%; margin: 0; display: flex; flex-direction: column; align-items: center;">
    <img src="/splunk-show-docs/images/event_invite_email.png" alt="Grouped Resources 2" style="width: 100%; height: auto; display: block; flex-shrink: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Example invite email from Splunk Show
    </figcaption>
  </figure>
</div>

{{% notice info %}}
**Want to know when someone has enrolled in your event?**  
You can optionally enable the 'ON USER ENROLLMENT TO EVENT' Email or Slack (Splunkers only) notification(s) under your Show user settings.

<figure style="max-width: 100%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/enrolment_notification.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Receive an email or Slack notification when someone enrols in an event
  </figcaption>
</figure>

Please see [Notifications](/account-settings/notifications/) for instructions on how to manage notifications.
{{% /notice %}}

* **Add event manager** - launches the 'Add managers' popup where you can add the email address of another Show user. They will receive an email invitation - as well as a notification within Show - to join your workshop event as an additional manager. If they accept the invite they will have full access to the event management page as if they had spun up the event themselves.

## Customise the Event Thumbnail Image

You can customise your event thumbnail image by clicking on the upload button in the corner of the image.

<img src="/splunk-show-docs/images/event_thumbnail.png" alt="my_page" style="width: 40%; height: auto; display: block; margin: 0;">

Click on **upload file…** and browse to the image you want to upload.

<img src="/splunk-show-docs/images/upload_custom_thumbnail.png" alt="my_page" style="width: 50%; height: auto; display: block; margin: 0;">

Move the image to fit within the available area and click on **Upload** to add your image. If you need to reset the image back to the default, click on **Reset**.

<figure style="max-width: 50%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/event_thumbnail_preview.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Click and drag to move your image. Scroll to zoom in and out
  </figcaption>
</figure>

The workshop event will now use your custom image!

<figure style="max-width: 80%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/event_with_custom_thumbnail.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Event with custom thumbnail
  </figcaption>
</figure>

## Editing the Schedule of an Event

If your event is still **SCHEDULED** you can edit the provisioning time (the time when the instances will be spun up) and the Event Start time (the time when attendees will be able to access their instance information from the event page.)

Edit the schedule by scrolling to the **Provisioning Time** section and clicking on the edit button. Click on **Submit** to save your changes.

<img src="/splunk-show-docs/images/edit_prov_time.png" alt="my_page" style="width: 70%; height: auto; display: block; margin: 0;">

{{% notice info %}}
**Event Already RUNNING?**  
If your event is already showing as RUNNING you cannot change the provisioning or start times. You can, however, still edit the instance running schedule under the **Schedule** section or extend the life of your workshop instances by clicking *Change lifetime* (top right of the page) and choosing a new expiry date for your workshop (see [Managing Demos](/demos/managing-demos/#extend-instances-change-lifetime) for more information).
{{% /notice %}}

<figure style="max-width: 100%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/schedule.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Edit the instance running schedule to adjust the hours your instances will be available
  </figcaption>
</figure>

## Managing Anonymous Enrolment via Passcode

The **Additional Settings** section allows you to enable or disable passcode authentication and enrolment for your event. Click on the edit icon to enable or disable the option.

<figure style="max-width: 40%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/additional_settings.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    You can enable or disable the passcode feature at any time
  </figcaption>
</figure>

Enabling this option will provide you with unique passcode for you event, which you can then copy and share with any users who do not have a Splunk.com account and are not able to sign up for one. Passcodes are unique for each event and expire at the end of the event. Your event can also have a mixture of Splunk.com enrolled users and passcode enrolled users.

<img src="/splunk-show-docs/images/passcode_copy.png" alt="my_page" style="width: 60%; height: auto; display: block; margin: 0;">

{{% notice info %}}
### Enrolling Using a Passcode

When a user is given a passcode they will visit the usual event link and this will take them to the usual sign in page. From here they will click on **Enter a passcode instead** and enter/paste the passcode.

<figure style="max-width: 80%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/login_passcode_option.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Attendees without an account should use the 'Enter a passcode instead' option
  </figcaption>
</figure>

<img src="/splunk-show-docs/images/login_enter_passcode.png" alt="my_page" style="width: 80%; height: auto; display: block; margin: 0;">

They will then be taken to the event page where they are automatically enrolled and will see their instance information once the event starts.
{{% /notice %}}

## Managing Event Instances

The **Resources** section of the event page allows you to manage the instances that were provisioned as part of your event.

Click on **Manage instances** to see a list of instances.

<img src="/splunk-show-docs/images/resources_manage.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">

Click on **Go to instance** to access the instance.

<img src="/splunk-show-docs/images/manage_instances_details.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">

**Instance name** - click on an instance name to view instance specific information including the connection information, utilization metrics and who (if anyone) is assigned to it.

<figure style="max-width: 100%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/connection_info_event.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Click on the Instance name to view detailed information about an individual instance
  </figcaption>
</figure>

{{% notice info %}}
**When are Instances Assigned to Users?**  
When a user enrols in a workshop Show will assign them an instance (provided the instances are running.)
{{% /notice %}}

Click on the **Instance participants** tab to see who is assigned to that instance. Note that for some workshops you will have more than one user per instance.

<figure style="max-width: 80%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/instance_participants.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Example of a participant assigned to an instance
  </figcaption>
</figure>

### Move Participants to Another Instance

If a participant experiences an issue with their assigned instance you can assign them to another instance by selecting them from the **Instance participants** list and clicking on the **Assign another instance to user** button.

<figure style="max-width: 80%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/participant_move_instance.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    You can move users to another instance when needed
  </figcaption>
</figure>

On the **Move participants to another instance** popup, select an available instance and click on **MOVE** to reassign the participant(s) to that instance.

<img src="/splunk-show-docs/images/move_participant.png" alt="my_page" style="width: 40%; height: auto; display: block; margin: 0;">
