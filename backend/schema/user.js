// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure email is unique
      // lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // Optional: basic validation
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
