const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

//SIGN UP
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new USer({ email, username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User created Sucessfully" });
  } catch (error) {
    res.status(500).json({ message: "server error", error });
  }
});
