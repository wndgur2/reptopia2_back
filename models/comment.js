const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  postId: {type: mongoose.Schema.Types.ObjectId, ref: "Post", required:true},
  authorId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required:true},
  authorName: {type: String, required:true},
  content: {type: String, required:false},
  likes: {type: Number, required:true},
}, {
  timestamps: true,
}
);

module.exports = mongoose.model('Comment', commentSchema);
