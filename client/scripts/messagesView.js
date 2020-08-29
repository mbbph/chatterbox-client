var MessagesView = {

  earliestAcceptableCreationDate: 0,

  $chats: $('#chats'),

  initialize: function(value) {
    MessagesView.renderMessage(value);
  },

  renderMessage: function(data) {
    let htmlMessage = '';

    var newEarliestAcceptableCreationDate = new Date(data[0]['createdAt']);
    //console.log(newEarliestAcceptableCreationDate);
    for (let i = 0; i < data.length; i++) { //most recent to earliest
      //console.log('message created at', data[i]['createdAt']);
      if (data[i]['username'] === undefined || data[i]['text'] === undefined || data[i]['roomname'] === undefined) {
        continue;
      }
      //console.log('current date', new Date(data[i].createdAt));
      //console.log('earliest date', MessagesView.earliestAcceptableCreationDate);
      //console.log('current date is later than earliest date', new Date(data[i].createdAt) > new Date//(MessagesView.earliestAcceptableCreationDate));
      if (new Date(data[i].createdAt) > MessagesView.earliestAcceptableCreationDate) {
        //console.log();
        let ourMessage = MessageView.render(data[i]);
        htmlMessage += ourMessage;
      }
    }
    var newChats = $('<div>' + htmlMessage + '</div>');
    MessagesView.$chats.prepend(newChats);
    MessagesView.earliestAcceptableCreationDate = newEarliestAcceptableCreationDate;
  }

};
