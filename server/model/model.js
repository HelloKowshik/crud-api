const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    default: 'N/A',
  },
  status: {
    type: String,
    default: 'Inactive',
  },
});

const UserDB = mongoose.model('user', userSchema);
module.exports = UserDB;
