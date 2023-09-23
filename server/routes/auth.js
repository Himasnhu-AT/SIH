const express = require("express");
const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth");

// SIGN UP
authRouter.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ msg: "User with same email already exists!" });
    }

    const hashedPassword = await bcryptjs.hash(password, 8);

    let user = new User({
      email,
      password: hashedPassword,
      name,
    });
    user = await user.save();
    res.json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Sign In Route
// Exercise
authRouter.post("/api/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ msg: "User with this email does not exist!" });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Incorrect password." });
    }

    const token = jwt.sign({ id: user._id }, "passwordKey");
    res.json({ token, ...user._doc });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


authRouter.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json({ valid: false }); // Return an object indicating token is not valid

    const verified = jwt.verify(token, "passwordKey");
    if (!verified) return res.json({ valid: false }); // Return an object indicating token is not valid

    const user = await User.findById(verified.id);
    if (!user) return res.json({ valid: false }); // Return an object indicating token is not valid

    // If the token is valid, return user details along with a valid flag
    res.json({ valid: true, user });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

authRouter.post("/update", auth, async (req, res) => {
  try {
    const userId = req.user;
    const { contact, address, email } = req.body;

    const user = await User.findByIdAndUpdate(userId, { email, contact, address }, { new: true });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json({ msg: "User data updated successfully", user });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});



// get user data
authRouter.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({ ...user._doc, token: req.token });
});

module.exports = authRouter;