// models/User.js
const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  logs: {
    type: String,
    required: true,
    trim: true,
  }
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});


const Logs = mongoose.model('Logs', logSchema);
module.exports = Logs;
