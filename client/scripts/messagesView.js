var MessagesView = {

  $chats: $('#chats'),

  initialize: function(value) {
    MessagesView.renderMessage(value);
  },

  // render: function() {
  // },




  renderMessage: function(data) {
    let htmlMessage = '';
    for (let i = 0; i < data.length; i++) {

      if (data[i]['username'] === undefined || data[i]['text'] === undefined || data[i]['roomname'] === undefined) {
        continue;
      }

      let ourMessage = MessageView.render(data[i]);
      htmlMessage += ourMessage;
    }
    var newChats = $('<div>' + htmlMessage + '</div>');
    MessagesView.$chats.append(newChats);
  }

};
