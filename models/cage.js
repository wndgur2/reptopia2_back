const mongoose = require('mongoose');

const cageSchema = mongoose.Schema({
  creatureIds: {type: [String], required:true},
  itemIds: {type: [String], required:true},

  width: {type: Number, required:true},
  depth: {type: Number, required:true},
  height: {type: Number, required:true},

  temperature: {type: Number, required:true},
  humidity: {type: Number, required:true},

  pollution: {type: Number, required:true},
  naturalDecompositionPerDay: {type: Number, required:true},
  ventilation: {type: Number, required:true},

  brightness: {type: Number, required:true},
});

module.exports = mongoose.model('Cage', cageSchema);
