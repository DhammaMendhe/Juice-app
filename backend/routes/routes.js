// app/routes/login.js
const express = require('express');
const { logActivity } = require('../utils/logger');
const { login } = require('../lib/authentication'); // existing login logic

const router = express.Router();

router.post('/login', (req, res, next) => {
  const { email, password } = req.body;

  login(email, password)
   // call original logic
//   console.log(email,password)
//   res.send(logActivity)

    .then(token => {
      logActivity(email, 'User logged in');
      res.json({ authentication: { token } });
    })
    .catch(err => {
      logActivity(email, 'Failed login');
      res.status(401).json({ error: 'Login failed' });
    });
});

module.exports = router;
