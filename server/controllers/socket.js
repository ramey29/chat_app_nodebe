const UserController = require('../controllers/user');
const IOHelper = require('../../helpers/io.helper');

const ROOM_NAME = 'TEST_ROOM';

const map = {};

module.exports = function (io) {

  io.on('connection', function(socket) {
      console.log('User Connected', socket.id);

      socket.on('setId', function(id) {
        map[id] = socket.id;
      });

      socket.on('message', function(data) {
        IOHelper.sendToPrivate(io, map[data.id], 'recieveMessage', data.message);
      });

      socket.on('disconnect', function() {
          console.log('disconnect');
      });
  });
};