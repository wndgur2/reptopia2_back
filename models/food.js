const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  name: {type: String, require: true},
  weight: {type: Number, require: true},
});

module.exports = mongoose.model('Food', foodSchema);
