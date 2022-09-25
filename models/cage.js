const mongoose = require('mongoose');

const cageSchema = mongoose.Schema({
  creatureIds: {type: [mongoose.Schema.Types.ObjectId], ref: "Creature", required:true},
  itemIds: {type: [mongoose.Schema.Types.ObjectId], ref: "Item", required:true},

  width: {type: Number, required:false},
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
