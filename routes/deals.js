const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Deal = require("../models/deal");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", checkAuth,(req, res, next) => {
  const deal = new Deal(req.body);
  deal.save()
  .then(createdDeal => {
    res.status(201).json({
      message: "Deal added successfully",
      dealId: createdDeal._id
    })
  })
  .catch(err=>{
    res.status(500).json({
      message: "Deal post error",
      error:err
    });
  });
});

router.get("", (req, res, next) => {
  Deal.find().then(documents => {
    res.status(200).json({
      message: "Deals fetched successfully!",
      deals: documents
    });
  });
});

module.exports = router;