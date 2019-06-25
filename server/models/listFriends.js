const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const listFriendsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  profileimg: String,
  lastchat: String,
  date:Date
});
module.exports = mongoose.model('listFriends', listFriendsSchema);
