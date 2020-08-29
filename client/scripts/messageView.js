var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="name"><%- username %></div>
        <div class="text"><%- text %></div>
        <div class="roomn"><%- roomname %></div>
      </div>
    `)

};
