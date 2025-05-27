const fs = require("fs");
const path = require("path");
const Logs = require("../schema/userLogs");

const logDir = path.join(__dirname, "../logs");
const logPath = path.join(logDir, "user-activity.log");

// Ensure log directory exists
// if (!fs.existsSync(logDir)) {
//   fs.mkdirSync(logDir, { recursive: true });
// }

async function logActivity(email, action, token) {
  const logLine = `${new Date().toISOString()} - ${email} - ${action}${token ? ` - Token: ${token}` : ""}\n`;

  // Save log to MongoDB
  try {
await Logs.create({ info: logLine });
    console.log("Log saved to DB:", Logs);
  } catch (error) {
    console.error("Error saving log to DB:", error.message);
  }

  // Save log to file
//   fs.appendFile(logPath, logLine, (err) => {
//     if (err) {
//       console.error("Failed to write log file:", err);
//     }
//   }
// );
}

module.exports = { logActivity };
