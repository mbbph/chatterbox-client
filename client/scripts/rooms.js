var Rooms = {
  room: 'lobby',

  add: function(str) {
    console.log(str);
    var newRoom = $('<option value=' + str + '>' + str + '</option>');
    RoomsView.$select.append(newRoom);
    $('#newroom').val('');
  }

};
