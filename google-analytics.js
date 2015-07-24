// Only runs when a client connects
if (Meteor.isClient) {

  console.log('This is the Meteor client environment, welcome!');

  // Initializes session counter property
  Session.setDefault('counter', 0);

  // Events that happen on DOM elements inside the "hello" template
  Template.hello.events({

    'click button': function() {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);

      // Send to Google Analytics
      // Note: The semantics conflict w/Google's example values, imo
      if ('function' == typeof (gaEvent)) {
        gaEvent({
          category: 'exampleCategory',    // Required
          action: 'actionExample',      // Required
          label: 'labelExample',       // Required
          debug: true,                // Optional, console message on event attempt
        });
      }
    },

  });

  // Data helpers for the "hello" template
  Template.hello.helpers({

    // Retrieves counter value from session and passes it to template
    counter: function() {
      var count = Session.get('counter') || 0;
      if (10 < count) {
        Session.set('warn', true);
      }
      return count;
    },

    // Retrieves counter value from session and passes it to template
    warning: function() {
      var count = Session.get('counter');
      if (10 < count) {
        return true;
      }
      return false;
    },

  });

  // Code to execute when the "hello" template is rendered for presentation to client
  Template.hello.onRendered(function() {

    // This is where we really want to do this, but Google can be too slow
    /*
     *if ('function' == typeof (gaPageView)) {
     *  gaPageview();  // Defaults to URL in browser's locationb bar
     *}
     */

  });

}

// Runs when Meteor starts up and executes code in server context
if (Meteor.isServer) {

  Meteor.startup(function() {

    console.log('Meteor.startup has fired on the server,'
                + ' you may now load it in your browser!');

  });

}

// iDM Waiting for Google cheater
(function idmGACheat (x) {
  var x = x * 2 || 100;
  // This can take *forever* sometimes
  if (180000 < x) {
    console.log('iDM-GA ERROR: Google script did not complete loading');
    return;
  }
  Meteor.setTimeout(function() {
    if (
        ('function' == typeof (ga))
        && ('function' == typeof (gaPageview))
    ) {
      gaPageview();
    } else {
      idmGACheat(x);
    }
  }, x);
})(); // i<3Meteor
