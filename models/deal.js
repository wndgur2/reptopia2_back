const mongoose = require('mongoose');

const dealSchema = mongoose.Schema({
  creatureId: {type: mongoose.Schema.Types.ObjectId, ref: "Creature", required: true},
  userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
  price: {type: Number, required: true},
  comment: {type: String, required: true},
});

module.exports = mongoose.model('Deal', dealSchema);
