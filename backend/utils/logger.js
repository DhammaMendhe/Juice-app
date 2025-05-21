const fs = require('fs');
const path = require('path');
// const path = require('../logs/)

const logDir = path.join(__dirname, '../logs');
const logPath = path.join(logDir, 'user-activity.log');

// Ensure logs folder exists
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

function logActivity(email, action, token = 'jgjhgjhjhjhjgjhgjgjgj9999') {
  const logLine = `${new Date().toISOString()} - ${email} - ${action}` + (token ? ` - Token: ${token}` : '') + '\n';
//   console.log('Logging:', logLine);


 fs.appendFile(logPath, logLine, (err) => {
    if (err) {
      console.error('Failed to write log:', err);
    }
  });}

module.exports = { logActivity };
