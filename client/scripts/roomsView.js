var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$select.change(function() {

      Rooms.room = RoomsView.$select.val(); //$(this).children('option:selected').val();
      //console.log('the room', Rooms.room);
      $('.chat').css('display', 'none');
      //$('.room' + `${Rooms.room}`).css('display', 'block');
      //$('.roomnewroom').css('display', 'block');
    });
  },

  render: function() {
  },

  renderRoom: function(str) {
    Rooms.add(str);
  },



};
