const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email: {type: String, required: true, unique: true },
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

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
