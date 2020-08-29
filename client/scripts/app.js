var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      let htmlMessage = '';
      console.log(Array.isArray(data));
      for (var m in data) {
        console.log(typeof data[m]);
        //let ourMessage = MessageView.render(data[m]);
        //htmlMessage += ourMessage;
      }
      //console.log(htmlMessage);
      //var newChats = $('<div>' + htmlMessage + '</div>');
      //$('#chats').append(newChats);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
