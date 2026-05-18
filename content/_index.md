+++
title = "Splunk Show Documentation"
description = "A comprehensive user guide for using the Splunk Show platform"
+++

<style>
  /* Default: hide both */
  .theme-image-light, .theme-image-dark { display: none !important; margin: 0 auto; }

  /* Explicit splunk-light */
  :root[data-r-theme-variant="splunk-light"] .theme-image-light { display: block !important; }
  :root[data-r-theme-variant="splunk-light"] .theme-image-dark { display: none !important; }

  /* Explicit splunk-dark */
  :root[data-r-theme-variant="splunk-dark"] .theme-image-light { display: none !important; }
  :root[data-r-theme-variant="splunk-dark"] .theme-image-dark { display: block !important; }

  /* Auto mode: OS light preference */
  @media (prefers-color-scheme: light) {
    :root[data-r-theme-variant="auto"] .theme-image-light { display: block !important; }
    :root[data-r-theme-variant="auto"] .theme-image-dark { display: none !important; }
  }

  /* Auto mode: OS dark preference */
  @media (prefers-color-scheme: dark) {
    :root[data-r-theme-variant="auto"] .theme-image-light { display: none !important; }
    :root[data-r-theme-variant="auto"] .theme-image-dark { display: block !important; }
  }
</style>

<img src="/images/welcome_to_the_show_light.png" alt="welcome" class="theme-image-light" style="max-width: 70%; height: auto;">
<img src="/images/welcome_to_the_show_dark.png" alt="welcome" class="theme-image-dark" style="max-width: 70%; height: auto;">

<!-- # Welcome to Splunk Show -->

Splunk Show is a platform to request demonstration instances across Splunk Cloud, Splunk Enterprise, SOAR, Observability Cloud, Splunk Cloud Services (SCS) and beyond.

This documentation will walk you through the major steps in navigating the interface and some best practices when requesting instances.

**Click-through tutorial:** Visit [splunk.show/tutorial](https://splunk.show/tutorial) to get a quick guided tour of the Splunk Show UI including:

* Navigating Splunk Show
* Creating a Demo
* Creating a Workshop
* and more!
