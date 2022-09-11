const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  name: {type: Number, required: true},
  price: {type: Number, required: true},
  description: {type: String, required: true},
});

module.exports = mongoose.model('Item', itemSchema);
