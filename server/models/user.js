const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  profile_img: String,
  status: {
    type: String,
    required: true,
  },
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
});
module.exports = mongoose.model('User', userSchema);
