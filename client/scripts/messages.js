var Messages = {
  submit: function() {
    var message = {
      username: App.username,
      text: $('#message').val(),
      roomname: 'lobby'
    };

    Parse.create(message);
    $('#message').val('');
  }

};

// var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };
