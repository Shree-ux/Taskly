#!/bin/bash

echo "🚀 Setting up Taskly for development..."

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
npm install
cd ..

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
npm install
cd ..

echo "✅ Setup complete!"
echo ""
echo "To start development:"
echo "1. Backend: cd backend && npm start"
echo "2. Frontend: cd frontend && npm start"
echo ""
echo "Make sure to set up your environment variables:"
echo "- Backend: Create .env file with MONGODB_URI"
echo "- Frontend: Create .env file with REACT_APP_API_URL"
