const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);


const MONGODB_URL = 'mongodb+srv://rameshwar:1qaz!QAZ@cluster0-s8t6v.mongodb.net/my-chat-app?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("mongoDB connected");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

require('./server/controllers/socket')(io);

// Routes
const users = require('./server/routes/user');
const listFriends = require('./server/routes/listFriends');
app.use('/api/user', users);
app.use('/api/friends', listFriends);

const port = 3000;
server.listen(port, () => {
  console.log(`Our server is running on port ${port}`);
});