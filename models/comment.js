const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  postId: {type: String, required:true},
  authorId: {type: String, required:true},
  content: {type: String, required:true},
  likes: {type: Number, required:true},
});

module.exports = mongoose.model('Comment', commentSchema);
