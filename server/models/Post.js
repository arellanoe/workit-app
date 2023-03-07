const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  postText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 300,
    trim: true,
  },
  postAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Post = model('Post', postSchema);

module.exports = Post;