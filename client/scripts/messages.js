var Messages = {
  submit: function() {
    var message = {
      username: App.username,
      text: $('#message').val(),
      roomname: 'lobby'
    };

    Parse.create(message);
    $('#message').val('');

    App.startSpinner();
    App.fetch(App.stopSpinner);
  }
};
