const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  id: {type: Number, required: true },
  identifier: {type: String, required: true },
  password: {type: String, required: true },

  level: {type: Number, required: true },
  achievements: {type: [String], required: true },
  reppi: {type: Number, required: true },
  creatureIds: {type: [Number], required: true },
  itemIds: {type: [Number], required: true },

  postIds: {type: [Number], required: true },
  commentIds: {type: [Number], required: true },
  likedPostIds: {type: [Number], required: true },
  likedCommentIds: {type: [Number], required: true },
  viewedPostIds: {type: [Number], required: true }, //중복 조회 방지
});

module.exports = mongoose.model('User', userSchema);
