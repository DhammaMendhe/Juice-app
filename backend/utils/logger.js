const fs = require('fs');
const path = require('path');
const logs = require('../schema/userLogs');
// const path = require('../logs/)

const logDir = path.join(__dirname, '../logs');
const logPath = path.join(logDir, 'user-activity.log');

// Ensure logs folder exists
// if (!fs.existsSync(logDir)) {
//   fs.mkdirSync(logDir, { recursive: true });
// }

async function logActivity(email, action, token) {
  const logLine = `${new Date().toISOString()} - ${email} - ${action}` + (token ? ` - Token: ${token}` : '') + '\n';
//   console.log('Logging:', logLine);
 try {
    
   let log = await logs.create({
      info:logLine
    });
  } catch (error) {
    console.error(error.message);
    // res.status(500).send("logs not save....");
  }


//for saving log data into file
 fs.appendFile(logPath, logLine, (err) => {
    if (err) {
      console.error('Failed to write log:', err);
    }
  });}

 

module.exports = { logActivity };
