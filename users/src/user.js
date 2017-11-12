const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: string
});

const User = mongoose.model('user',UserSchema);

module.exports = User;