const mongoose = require('mongoose');

const dealSchema = mongoose.Schema({
  id: {type: Number, required: true},
  creatureId: {type: Number, required: true},
  userId: {type: Number, required: true},
  price: {type: Number, required: true},
  comment: {type: String, required: true},
});

module.exports = mongoose.model('Deal', dealSchema);
