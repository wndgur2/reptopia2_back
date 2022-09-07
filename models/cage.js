const mongoose = require('mongoose');

const cageSchema = mongoose.Schema({
  id: {type: Number, required:true},

  creatureIds: {type: [Number], required:true},
  itemIds: {type: [Number], required:true},

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
