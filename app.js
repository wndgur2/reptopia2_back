const express = require('express');
const app = express();
app.use('/home', (req, res, next) => {
  const cages = [
    { id: 1, creatureId: 1, width: 30, depth: 30, height: 45 },
    { id: 2, creatureId: 2, width: 30, depth: 45, height: 30 },
    { id: 3, creatureId: 3, width: 30, depth: 30, height: 30 },
    { id: 4, creatureId: 4, width: 45, depth: 45, height: 30 },
  ]
  res.status(200).json({
    message: 'Post fetched successfully!',
    cages: cages
  });
});

module.exports = app;