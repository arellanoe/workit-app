const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  body: {
    type: String,
    required: true
  }
});

const blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;