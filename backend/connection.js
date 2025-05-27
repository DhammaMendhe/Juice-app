const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/juice-app'; // For local MongoDB

// Or for MongoDB Atlas:
// const mongoURI = 'mongodb+srv://<username>:<password>@cluster.mongodb.net/your-database-name?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected successfully');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1); // Optional: Stop the app if DB fails
  }
};

module.exports = connectDB;
