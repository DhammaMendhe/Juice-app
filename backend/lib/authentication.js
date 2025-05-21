// app/lib/authentication.js
function login(email, password) {
  return new Promise((resolve, reject) => {
    const dummyUser = { email: 'test@example.com', password: '123456' };

    if (email === dummyUser.email && password === dummyUser.password) {
      const token = 'jgjhgjhjhjhjgjhgjgjgj9999';
      resolve(token);
    } else {
      reject(new Error('Invalid credentials'));
    }
  });
}

module.exports = { login };
