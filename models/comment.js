const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  postId: {type: mongoose.Schema.Types.ObjectId, ref: "Post", required:true},
  authorId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required:true},
  content: {type: String, required:true},
  likes: {type: Number, required:true},
});

module.exports = mongoose.model('Comment', commentSchema);
