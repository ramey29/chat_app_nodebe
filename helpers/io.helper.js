const _ = require('lodash');

// sending to self
const sendToSelf = (socket, method, data) => {
    socket.emit(method, data);
};

// sending to self from connected sockets
const _sendToSelf = (io, socketId, method, data) => {
    _.each(io.sockets.sockets, function(socket) {
        if (socket.id === socketId) {
            socket.emit(method, data);
        }
    });
};

// sending to all clients, include sender
const sendToAllConnectedClients = (io, method, data) => {
    io.sockets.emit(method, data);
};

// sending to all clients in room(channel) include sender
const sendToAllClientsInRoom = (io, room, method, data) => {
    io.sockets.in(room).emit(method, data);
};

// sending to all clients in room(channel) except sender
const sendToAllClientsInRoomExceptByIo = (io, room, method, data) => {
    io.sockets.to(room).emit(method, data);
};

// sending to all clients in room(channel) except sender
const sendToAllClientsInRoomExcept = (socket, room, method, data) => {
    socket.broadcast.to(room).emit(method, data);
};

// sending to individual socketid (private message)
const sendToPrivate = (io, socketId, method, data) => {
    io.to(socketId).emit(method, data);
};

// sending to sender-client only (except one)
const sendToAllExcept = (io, exceptSocketId, method, data) => {
    _.each(io.sockets.sockets, function(socket) {
        if (socket.id !== exceptSocketId) {
            socket.emit(method, data);
        }
    });
};

module.exports = {
    sendToSelf: sendToSelf,
    _sendToSelf: _sendToSelf,
    sendToAllConnectedClients: sendToAllConnectedClients,
    sendToAllExcept: sendToAllExcept,
    sendToAllClientsInRoom: sendToAllClientsInRoom,
    sendToAllClientsInRoomExcept: sendToAllClientsInRoomExcept,
    sendToPrivate: sendToPrivate,
    sendToAllClientsInRoomExceptByIo: sendToAllClientsInRoomExceptByIo
};