var MessagesView = {

  earliestAcceptableCreationDate: 0, //last message seen

  $chats: $('#chats'),

  initialize: function(value) {
    MessagesView.render(value);
  },

  render: function(data) { //renders a list of messages
    var newEarliestAcceptableCreationDate = new Date(data[0]['createdAt']); //get latest message
    for (let i = 0; i < data.length; i++) { //most recent to earliest
      MessagesView.renderMessage(data[i]);
    }
    MessagesView.earliestAcceptableCreationDate = newEarliestAcceptableCreationDate;

  },

  renderMessage: function(data) { //renders a single message
    if (data['username'] === undefined || data['text'] === undefined || data['roomname'] === undefined) {
      return '';
    }
    if (data.createdAt === undefined) {
      data.createdAt = new Date();
    }
    if (new Date(data.createdAt) > MessagesView.earliestAcceptableCreationDate) {
      let htmlMessage = MessageView.render(data);
      var newChats = $('<div>' + htmlMessage + '</div>');
      newChats.addClass('chat');
      newChats.addClass('author' + `${data['username']}`);
      newChats.addClass('room' + `${data['roomname']}`);
      MessagesView.$chats.prepend(newChats);
      // if (data['roomname'] !== Rooms.room) {
      //   newChats.hide();
      //}
    }
  }

};
