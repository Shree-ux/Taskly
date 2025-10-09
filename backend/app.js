const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./conn/conn");
const path = require("path");
const auth = require("./routes/auth");
const list = require("./routes/list");

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// CORS configuration
const allowedOrigins = process.env.NODE_ENV === 'production' 
  ? [
      process.env.FRONTEND_URL,
      'https://taskly-frontend.vercel.app',
      'https://taskly-frontend.netlify.app'
    ].filter(Boolean)
  : ['http://localhost:3000', 'http://localhost:1000', 'http://127.0.0.1:3000'];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// API Routes
app.use("/api/v1", auth);
app.use("/api/v2", list);

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ message: "TodoList API is running", timestamp: new Date().toISOString() });
});

// Test endpoint for debugging
app.get("/api/v1/test", (req, res) => {
  res.json({ message: "API is working", timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Something went wrong!', 
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error' 
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
  console.log(`🚀 Server Started on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 CORS enabled for: ${allowedOrigins.join(', ')}`);
});
