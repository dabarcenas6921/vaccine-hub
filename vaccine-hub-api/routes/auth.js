const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
    //take users email and password and attempting to authenticate them
  } catch (e) {
    next(e);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    //take the user, email, and password and create a new user in the database.
  } catch (e) {
    next(e);
  }
});

module.exports = router;
