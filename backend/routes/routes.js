const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../schema/user");
const { logActivity } = require("../utils/logger");
const { login } = require("../lib/authentication");

const router = express.Router();
const jwt_secret = "iamhappywith$this";

// ========== LOGIN ROUTE ==========
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let success = false;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success, error: "Invalid credentials." });
    }

    const isPasswordCorrect = await bcryptjs.compare(password, user.password);
    if (!isPasswordCorrect) {
      logActivity(email, "Failed login");
      return res.status(401).json({ success, error: "Invalid credentials." });
    }

    const payload = { user: { id: user.id } };
    const authtoken = jwt.sign(payload, jwt_secret);

    logActivity(email, "User logged in");

    success = true;
    res.json({ success, authtoken });

  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// ========== SIGNUP ROUTE ==========
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  let success = false;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success,
        errors: "User with this email already exists",
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const secPass = await bcryptjs.hash(password, salt);

    user = await User.create({
      name,
      email,
      password: secPass,
    });

    const payload = { user: { id: user.id } };
    const authtoken = jwt.sign(payload, jwt_secret);

    success = true;
    res.json({ success, authtoken });

  } catch (error) {
    console.error("Signup error:", error.message);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

module.exports = router;
