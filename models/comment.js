const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  id: {type: Number, required:true},
  postId: {type: Number, required:true},
  authorId: {type: Number, required:true},
  content: {type: String, required:true},
  likes: {type: Number, required:true},
});

module.exports = mongoose.model('Comment', commentSchema);
