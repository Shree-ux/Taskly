# Taskly Deployment Guide

This guide will help you deploy your Taskly application with separate backend and frontend deployments.

## 🏗️ Project Structure

```
Taskly/
├── backend/          # Node.js/Express API
├── frontend/         # React Application
└── DEPLOYMENT_GUIDE.md
```

## 🚀 Deployment Options

### Backend Deployment Options

1. **Railway** (Recommended)
2. **Render**
3. **Heroku**

### Frontend Deployment Options

1. **Vercel** (Recommended)
2. **Netlify**

## 📋 Prerequisites

- GitHub account
- MongoDB Atlas account
- Railway/Render/Heroku account
- Vercel/Netlify account

## 🗄️ Step 1: Set up MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Create a database user
4. Whitelist your IP address (use `0.0.0.0/0` for all IPs)
5. Get your connection string

## 🔧 Step 2: Backend Deployment (Railway)

### Option A: Railway (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Deploy on Railway:**
   - Go to [Railway](https://railway.app)
   - Sign in with GitHub
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Select the `backend` folder
   - Railway will auto-detect Node.js

3. **Set Environment Variables:**
   - Go to your project settings
   - Add these variables:
     ```
     NODE_ENV=production
     MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/taskly?retryWrites=true&w=majority
     FRONTEND_URL=https://your-frontend-domain.vercel.app
     ```

4. **Get your backend URL:**
   - Railway will provide a URL like: `https://taskly-backend-production.up.railway.app`

### Option B: Render

1. **Deploy on Render:**
   - Go to [Render](https://render.com)
   - Sign in with GitHub
   - Click "New +" → "Web Service"
   - Connect your repository
   - Set:
     - **Root Directory:** `backend`
     - **Build Command:** `npm install`
     - **Start Command:** `npm start`

2. **Set Environment Variables:**
   ```
   NODE_ENV=production
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/taskly?retryWrites=true&w=majority
   FRONTEND_URL=https://your-frontend-domain.vercel.app
   ```

### Option C: Heroku

1. **Install Heroku CLI:**
   ```bash
   npm install -g heroku
   ```

2. **Deploy:**
   ```bash
   cd backend
   heroku create your-app-name
   heroku config:set NODE_ENV=production
   heroku config:set MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/taskly?retryWrites=true&w=majority
   heroku config:set FRONTEND_URL=https://your-frontend-domain.vercel.app
   git subtree push --prefix=backend heroku main
   ```

## 🎨 Step 3: Frontend Deployment (Vercel)

### Option A: Vercel (Recommended)

1. **Deploy on Vercel:**
   - Go to [Vercel](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Set:
     - **Root Directory:** `frontend`
     - **Build Command:** `npm run build`
     - **Output Directory:** `build`

2. **Set Environment Variables:**
   ```
   REACT_APP_API_URL=https://your-backend-domain.railway.app
   ```

3. **Deploy:**
   - Click "Deploy"
   - Vercel will provide a URL like: `https://taskly-frontend.vercel.app`

### Option B: Netlify

1. **Deploy on Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Sign in with GitHub
   - Click "New site from Git"
   - Choose your repository
   - Set:
     - **Base directory:** `frontend`
     - **Build command:** `npm run build`
     - **Publish directory:** `frontend/build`

2. **Set Environment Variables:**
   - Go to Site settings → Environment variables
   ```
   REACT_APP_API_URL=https://your-backend-domain.railway.app
   ```

## 🔄 Step 4: Update CORS Configuration

After getting your frontend URL, update the backend CORS configuration:

1. **Update backend/app.js:**
   ```javascript
   const allowedOrigins = process.env.NODE_ENV === 'production' 
     ? [
         process.env.FRONTEND_URL,
         'https://your-frontend-domain.vercel.app'
       ].filter(Boolean)
     : ['http://localhost:3000', 'http://localhost:1000', 'http://127.0.0.1:3000'];
   ```

2. **Redeploy your backend** with the updated CORS settings.

## 🧪 Step 5: Testing

1. **Test Backend:**
   ```bash
   curl https://your-backend-domain.railway.app/api/v1/test
   ```

2. **Test Frontend:**
   - Visit your frontend URL
   - Try to register/login
   - Create a task

## 🔧 Troubleshooting

### Common Issues:

1. **CORS Errors:**
   - Ensure frontend URL is added to backend CORS configuration
   - Check that environment variables are set correctly

2. **Database Connection Issues:**
   - Verify MongoDB Atlas connection string
   - Check IP whitelist in MongoDB Atlas
   - Ensure database user has proper permissions

3. **Build Failures:**
   - Check Node.js version compatibility
   - Verify all dependencies are in package.json
   - Check build logs for specific errors

### Environment Variables Checklist:

**Backend:**
- ✅ `NODE_ENV=production`
- ✅ `MONGODB_URI=mongodb+srv://...`
- ✅ `FRONTEND_URL=https://your-frontend-domain.com`

**Frontend:**
- ✅ `REACT_APP_API_URL=https://your-backend-domain.com`

## 📊 Monitoring

- **Railway:** Built-in metrics and logs
- **Vercel:** Analytics and performance monitoring
- **MongoDB Atlas:** Database monitoring and alerts

## 🔄 Updates and Maintenance

1. **Update Backend:**
   ```bash
   git add .
   git commit -m "Update backend"
   git push origin main
   # Railway/Render will auto-deploy
   ```

2. **Update Frontend:**
   ```bash
   git add .
   git commit -m "Update frontend"
   git push origin main
   # Vercel/Netlify will auto-deploy
   ```

## 🎯 Final URLs

After deployment, you should have:
- **Backend API:** `https://your-backend-domain.railway.app`
- **Frontend App:** `https://your-frontend-domain.vercel.app`

## 📞 Support

If you encounter issues:
1. Check the deployment logs
2. Verify environment variables
3. Test API endpoints individually
4. Check CORS configuration

---

**Happy Deploying! 🚀**
