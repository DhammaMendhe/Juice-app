// schema/userLogs.js
const mongoose = require("mongoose");

const logsSchema = new mongoose.Schema({
  info: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Logs", logsSchema);
