const mongoose = require('mongoose');

const dealSchema = mongoose.Schema({
  creatureId: {type: String, required: true},
  userId: {type: String, required: true},
  price: {type: Number, required: true},
  comment: {type: String, required: true},
});

module.exports = mongoose.model('Deal', dealSchema);
