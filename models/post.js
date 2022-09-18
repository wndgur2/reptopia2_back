const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  likes: { type: Number, required: true },
  views: { type: Number, required: true },
  date: { type: String, required: true },
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  commentIds: { type: [mongoose.Schema.Types.ObjectId], ref: "comment", required: true },
});

module.exports = mongoose.model('Post', postSchema);
