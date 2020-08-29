var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    // MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {

      data = data.results;
      MessagesView.initialize(data);

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

// console.log('data:', data);
// for (let i = 0; i < data.length; i++) {
//   console.log(data[i]);

//   if (data[i]['username'] === undefined || data[i]['text'] === undefined || data[i]['roomname'] === undefined) {
//     continue;
//   }

//   let ourMessage = MessageView.render(data[i]);
//   htmlMessage += ourMessage;
// }
// //console.log(htmlMessage);
// var newChats = $('<div>' + htmlMessage + '</div>');
// $('#chats').append(newChats);

// callback();
