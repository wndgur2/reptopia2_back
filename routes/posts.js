const express = require("express");

const User = require("../models/user");
const Post = require("../models/post");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", checkAuth, (req, res, next) => {
  const post = new Post({
    ...req.body,
    authorId: req.userData.id,
    authorName: req.userData.name
  });
  post.save().then(createdPost => {
    User.findById({_id:req.userData.id}).then(user=>{
      user.postIds = [...user.postIds, createdPost._id];
      user.save();
    });

    res.status(201).json({
      message: "Post added successfully",
      postId: createdPost._id,
      authorId: req.userData.id,
      authorName: req.userData.name
    });
  });
});

router.put("/like/:id", checkAuth, (req, res, next) => {
  Post.findByIdAndUpdate({ _id: req.params.id }, {likes:req.body.likes},
    (err, r) => {
      if(r){
        res.status(200).json({ message: "Like Update successful!" });
      } else{
        res.status(401).json({ message: "Not authorized!" });
      }
    }
  )
});

router.put("/:id", checkAuth, (req, res, next) => {
  Post.findOneAndUpdate({ _id: req.params.id, authorId: req.userData.id }, {$set: {title:req.body.title, content:req.body.content}}, {new:true},
    (err, r) => {
      if(r){
        res.status(200).json({ message: "Update successful!" });
      } else{
        res.status(401).json({ message: "Not authorized!" });
      }
    }
  )
});

router.get("", (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
  });
});

router.get("/:id", (req, res, next) => {
  Post.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "Post not found!" });
    }
  });
});

router.get("/postBy/:id", (req, res, next) => {
  Post.find({authorId: req.params.id}).then(posts => {
    if (posts) {
      res.status(200).json({ message: "Posts loaded.", posts:posts });
    } else {
      res.status(404).json({ message: "Post not found!" });
    }
  });
});

router.delete("/:id", checkAuth, (req, res, next) => {
  Post.findOneAndDelete({ _id: req.params.id, authorId: req.userData.id }).then(result => {
    if(result){
      return res.status(200).json({ message: "Post deleted!" });
    } else {
      res.status(401).json({ message: "Not authorized!" });
    }
  });
});

module.exports = router;
