const UserController = require('../controllers/user');
const IOHelper = require('../../helpers/io.helper');

const ROOM_NAME = 'TEST_ROOM';

module.exports = function (io) {

  io.on('connection', function(socket) {
      console.log('User Connected', socket.id);
      socket.on('message', function(data) {
        console.log(data);
        IOHelper.sendToAllClientsInRoomExcept(socket, ROOM_NAME, 'message', data);
      });

      socket.on('disconnect', function() {
          console.log('disconnect');
      });
  });
};