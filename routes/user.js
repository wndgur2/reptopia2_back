const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const router = express.Router();

router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
  .then(hash=>{
    const user = new User({
      email: req.body.email,
      password: hash,
      level: 0,
      achievements: [],
      reppi: 0,
      creatureIds: [],
      itemIds: [],

      postIds: [],
      commentIds: [],
      likedPostIds: [],
      likedCommentIds: [],
      viewedPostIds: []
    });
    user.save()
      .then(result=>{
        res.status(201).json({
          message: 'User created!',
          result: result,
        });
      })
      .catch(err=>{
        res.status(500).json({
          error:err
        });
      });
  });
});

router.post("/login", (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Email Not Found."
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Different Password"
        });
      }
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        "Everyday_Easier_With_The_Momentum",
        { expiresIn: "2h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 7200
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Auth failed"
      });
    });
});

module.exports = router;
