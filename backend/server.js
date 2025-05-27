// server.js

const express = require('express');
const bodyParser = require('body-parser');
const loginRoute = require('./routes/routes'); // custom login route
const sighupRoute = require('./routes/routes'); // custom login route
const connectDB = require('./connection') 


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

//connection 
console.log(typeof connectDB); // Should be 'function'

connectDB();
// Routes
app.use('/api', loginRoute); // Login route available at /api/login
app.use('/api', sighupRoute); // Login route available at /api/login

// Home
app.get('/', (req, res) => {
  res.send('Juice Shop Custom POC Running...');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
