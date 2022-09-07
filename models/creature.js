const mongoose = require('mongoose');

const creatureSchema = mongoose.Schema({
  id: {type: Number, required: true},

  //genetic
  species: {type: String, required: true},
  birth: {type: String, required: true},
  sex: {type: String, required: true},
  morphs: {type: [Number, Number][], required: true},

  //genetic character
  fear: {type: Number, required: true},
  eat: {type: Number, required: true},
  breed: {type: Number, required: true},
  sleep: {type: Number, required: true},

  //status
  name: {type: String, required: true},
  length: {type: Number, required: true},
  weight: {type: Number, required: true},
  stress: {type: Number, required: true},
  sleepy: {type: Number, required: true},
  hunger: {type: Number, required: true},
  shedding: {type: Number, required: true},
});

module.exports = mongoose.model('Creature', creatureSchema);
