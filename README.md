# @iDoMeteor's Google Analytics Meteor Demo <small>v0.0.1</small>

# Synopsis

This example uses the idometeor:google-analytics package to send pageviews and
events from the default Meteor skeleton example code.

* You can diff or hash my package's real-google-analytics.js w/the one from the link above, it is unchanged. :>


# Installation & Usage

*Git* the repo:
>$ ssh clone git@github.com:iDoMeteor/meteor-google-analytics-example.git
Then:
>$ cd meteor-google-analytics-example && meteor

# To configure:

>Set Meteor.settings.public.google in settings.json

I included some keys specifically for your localhost:3000 testing pleasure. :)

# Settings

    {
      "public": {
        "google": {
          "account": "UA-23671882-14",
          "cookie": {
            "auto": "true",
            "domain": "false",
            "expires": "false",
            "name": "false",
            "localMode": "false"
          },
          "debug": "false",
          "enable": "true",
          "trackInPage": "false",
          "trackInterests": "false"
        }
      }
    }

* There are a few more options in the upcoming drop-in.

# Package

Installation
>meteor add idometeor:google-analytics

To see the package:
* https://github.com/iDoMeteor/meteor-google-analytics
* https://atmospherejs.com/idometeor/google-analytics
