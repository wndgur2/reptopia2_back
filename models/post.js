const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  authorId: { type: String, required: true },
  likes: { type: Number, required: true },
  views: { type: Number, required: true },
  commentIds: { type: [Number], required: true },
  date: { type: String, required: true },
});

module.exports = mongoose.model('Post', postSchema);
