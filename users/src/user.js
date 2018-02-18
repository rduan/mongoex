const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = require('./post');

const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name)=> name.length > 2,
      message: 'Name longer than 3'
    },
    required: [true, 'name schema required']
  },
  postCount: Number,
  posts: [PostSchema]
}, {
  usePushEach: true 
});

const User = mongoose.model('user',UserSchema);

module.exports = User;