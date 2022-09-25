const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email: {type: String, required: true, unique: true },
  name: {type: String, required: true, unique: true },
  password: {type: String, required: true },

  level: {type: Number, required: true },
  achievements: {type: [String], required: true },
  reppi: {type: Number, required: true },
  creatureIds: {type: [mongoose.Schema.Types.ObjectId], ref: "Creature", required: true },
  itemIds: {type: [mongoose.Schema.Types.ObjectId], ref: "Item", required: true },

  postIds: {type: [mongoose.Schema.Types.ObjectId], ref: "post", required: true },
  likedPostIds: {type: [mongoose.Schema.Types.ObjectId], ref: "post", required: true },
  dislikedPostIds: {type: [mongoose.Schema.Types.ObjectId], ref: "post", required: true },
  viewedPostIds: {type: [mongoose.Schema.Types.ObjectId], ref: "post", required: true }, //중복 조회 방지
  
  commentIds: {type: [mongoose.Schema.Types.ObjectId], ref: "comment", required: true },
  likedCommentIds: {type: [mongoose.Schema.Types.ObjectId], ref: "comment", required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
