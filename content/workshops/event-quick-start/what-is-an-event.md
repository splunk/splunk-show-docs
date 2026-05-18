+++
title = "What is a Splunk Show 'Event'?"
weight = 10
+++

In Splunk Show you have three options for running a hands-on customer workshop:

## Normal workshop 

<span class=conditional-note>Attendees DO NOT need a splunk.com account.</span> A "traditional" workshop where you request a specific number of workshop instances up front. Once provisioned, instance details and access information must be [downloaded as a csv file](/workshops/managing-workshops/#obtain-a-list-of-instances-for-a-normal-workshop) for distribution to participants of the workshop. No record of participants is kept by Show (as there is no enrolment) - it's all down to you!

{{% notice tip %}}
**Ideal for:** "Old school" workshops where you're happy to manually manage instances and hand out credentials to participants.
{{% /notice %}}

## Private Event

<span class=conditional-note>Requires attendees to have a splunk.com account unless you enable 'Allow anonymous Enrolment via Passcode' at the bottom of the Create workshop page.</span>

A workshop that allows you to invite participants to an 'event' within Splunk Show. Invited participants can either use a direct link to access and enrol in the workshop event or you can invite them individually via their email address. When you use the email invite method invitees will receive an email to enrol in the event. You will also get a CSV list of enrolled users at the end of the workshop.

On the day of the event, instances will be spun up and participants can log in to Show (using their splunk.com account) to access their assigned instance information. 

{{% notice tip %}}
**Ideal for:** Workshops where you want to limit enrolments to only those who have the event link or who have been directly invited.
{{% /notice %}}

## Public Event

<span class=conditional-note>This method requires attendees to have a splunk.com account unless you enable 'Allow anonymous Enrolment via Passcode' at the bottom of the Create workshop page.</span>

Similar to private events but requires no invitation as anyone who logs in to Splunk Show (using a splunk.com account) can see and enrol in the workshop event. You will also get a CSV list of enrolled users at the end of the workshop.

{{% notice tip %}}
**Ideal for:** Public workshops/events where you want to allow open enrolments.
{{% /notice %}}

## Comparison Table

Below is a matrix showing the differences between these workshop types:

<table style="font-size: 0.9em;">
  <thead>
    <tr>
      <th>Workshop Type</th>
      <th>Can specify the # of instances you need upfront</th>
      <th>How workshop attendees obtain their instance information</th>
      <th>Splunk.com account required?</th>
      <th>Participants can join anonymously?</th>
      <th>Attendees need to enrol via Splunk Show?</th>
      <th>You receive an email list of attendees when the workshop ends</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Normal workshop</strong></td>
      <td style="background-color: #DFF2DD;">Yes</td>
      <td>Host downloads a CSV and manually shares details with attendees</td>
      <td style="background-color: #FFD5D2;">No</td>
      <td style="background-color: #DFF2DD;">Yes, as no user info is collected</td>
      <td style="background-color: #FFD5D2;">No</td>
      <td style="background-color: #FFD5D2;">No - Splunk Show has no record of who attended. You will need to track this yourself!</td>
    </tr>
    <tr>
      <td><strong>Event</strong></td>
      <td style="background-color: #DFF2DD;">Yes</td>
      <td>Customer logs in to Splunk Show and obtains their instance information via self-service</td>
      <td style="background-color: #DFF2DD;">Yes, unless passcode enrolment is enabled</td>
      <td style="background-color: #DFF2DD;">Yes, if passcode enrolment has been enabled</td>
      <td style="background-color: #DFF2DD;">Yes - you will need to send them the event link</td>
      <td style="background-color: #DFF2DD;">Yes - it's automatically emailed to you when the workshop ends!</td>
    </tr>
  </tbody>
</table>