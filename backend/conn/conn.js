const mongoose = require("mongoose");

const conn = async () => {
  try {
    // Use MongoDB Atlas or localhost based on environment
    const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/taskly";
    
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 10, // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      bufferMaxEntries: 0, // Disable mongoose buffering
      bufferCommands: false, // Disable mongoose buffering
    };
    
    await mongoose.connect(mongoURI, options);
    console.log("✅ Connected to MongoDB successfully");
    
    // Handle connection events
    mongoose.connection.on('error', (err) => {
      console.error('❌ MongoDB connection error:', err);
    });
    
    mongoose.connection.on('disconnected', () => {
      console.log('⚠️ MongoDB disconnected');
    });
    
    mongoose.connection.on('reconnected', () => {
      console.log('🔄 MongoDB reconnected');
    });
    
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    if (process.env.NODE_ENV === 'production') {
      process.exit(1); // Exit the process if database connection fails in production
    } else {
      console.log("⚠️ Continuing without database connection in development");
    }
  }
};

// Only connect if not already connected
if (mongoose.connection.readyState === 0) {
  conn();
}

module.exports = conn;
