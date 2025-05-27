// app/routes/login.js
const express = require('express');
const { logActivity } = require('../utils/logger');
const { login } = require('../lib/authentication'); // existing login logic
const User = require('../schema/user')
const router = express.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jtw_secret = "iamhappywith$this";
// import User from  '../schema/userSchema'

// router.post('/login', (req, res, next) => {
//   const { name,email, password } = req.body;

//   login(email, password)
//    // call original logic
// //   console.log(email,password)
// //   res.send(logActivity)

//     .then(token => {
//       logActivity(email, 'User logged in');
//       res.json({ authentication: { token } });
//     })
//     .catch(err => {
//       logActivity(email, 'Failed login');
//       res.status(401).json({ error: 'Login failed' });
//     });
// });






router.post('/signup', async(req, res, next) => {
  const { name, email, password } = req.body;
 try {
  let success = false;
  // console.log(name,email,password)
  let user = await User.findOne({  email });
            if (user) {
              console.log(user);

                return res.status(400).json({ success, errors: "user with this email already exists..." });

          }
            const salt = await bcryptjs.genSalt(10);
            let secPass = await bcryptjs.hash(password, salt);

            //this must be await because waiting for User creation
            user = await User.create({
                name,
                email,
                password: secPass
            });
             const data = {
                user: { id: user.id }
            }

            const authtoken = jwt.sign(data, jtw_secret);
            // success = true;
            res.json({ success, authtoken });


 } catch (error) 
 {
  console.error(error.message);
  res.status(500).send("some error occured.....");
 }

 
});





module.exports = router;
