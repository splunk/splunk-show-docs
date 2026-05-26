---
title: "Notifications"
weight: 20
---

<!-- # Notifications -->

To enable Slack and Email notifications, you will need to opt-in within the Splunk Show interface. In the upper-right corner, hover over the down arrow and click on **Account Settings**.

## Enable Slack Notifications
<span class="label">Splunkers Only</span> Under **Slack Notifications** click **Add to Slack**. You will be taken to a Slack web page asking permission to connect Splunk Show to your Slack account/workspace. Click **Allow** and you will be redirected back to Splunk Show.

## Enable Email Notifications

Under **Email Notifications** click **Enable Email Notifications**.

<img src="/splunk-show-docs/images/email_notifications.png" alt="my_page" style="width: 50%; height: auto; display: block; margin: 0;">

By default all notifications are off, but you can opt-in to all of them, or just select the ones you find most relevant.

As an example, to be notified a specific amount of time before an instance is stopped, you can click **+ Add Notification** and set the desired amount of time.

<img src="/splunk-show-docs/images/add_notification.png" alt="my_page" style="width: 60%; height: auto; display: block; margin: 0;">

<figure style="max-width: 50%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/email_notification.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Email notification example
  </figcaption>
</figure>

## Disable Notifications

Disable notifications at any time by clicking the **Unlink Slack** or **Disable Email Notifications** buttons respectively.

<img src="/splunk-show-docs/images/unlink_slack.png" alt="my_page" style="width: 30%; height: auto; display: block; margin: 0;">

<img src="/splunk-show-docs/images/disable_email_notifications.png" alt="my_page" style="width: 30%; height: auto; display: block; margin: 0;">

## Splunk Show Slackbot

<span class="label">Splunkers Only</span>

Slack notifications will be sent by the Splunk Show app.

<img src="/splunk-show-docs/images/slackbot.png" alt="my_page" style="width: 20%; height: auto; display: block; margin: 0;">

Two new slash ( `/` ) commands are now supported in Slack:
* `/list-demos` - lists the demos you currently have running or scheduled, allowing you to stop, suspend or extend (1 day at a time) your demos, as well as find the enablement materials - all directly from Slack!
* `/list-workshops` - provides the same functionality as above, but for workshops.

  <figure style="max-width: 60%; margin: 0 0 1rem 0;">
    <img src="/splunk-show-docs/images/slackbot_example.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
    <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
      Example of using the /list-workshops command in the Splunk Show Slackbot
    </figcaption>
  </figure>

* For more advanced instance management or access details, you will still need to use the Splunk Show UI.

## In-app Notifications

A notifications icon is now part of the navigation bar and will list interactions with specific features within Splunk Show.

Currently this is limited to ownership transfers and stack extension requests, but watch out for further notification types in future!

<figure style="max-width: 40%; margin: 0 0 1rem 0;">
  <img src="/splunk-show-docs/images/in_app_notifications.png" alt="my_page" style="width: 100%; height: auto; display: block; margin: 0;">
  <figcaption style="text-align: center; font-size: 0.9em; color: var(--MENU-SECTIONS-LINK-color); margin-top: 0.5rem; font-style: italic;">
    Example of a notification displayed within Splunk Show
  </figcaption>
</figure>
