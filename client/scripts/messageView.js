var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%- user %></div>
        <div class="text"><%- text %></div>
        <div class="roomname"><%- room %></div>
      </div>
    `)

};
