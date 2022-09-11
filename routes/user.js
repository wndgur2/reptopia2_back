const express = require("express");

const User = require("../models/user");

const router = express.Router();

router.post("", (req, res, next) => {
  const user = new User(req.body);
  user.save().then(newUser => {
    res.status(201).json({
      message: "User created successfully",
      userId: newUser._id
    });
  });
});

module.exports = router;
