# 📝 Taskly - Task Management Application

A modern, full-stack task management application built with React and Node.js, featuring drag-and-drop functionality, rich text editing, and real-time updates.

## ✨ Features

- 🎯 **Task Management**: Create, update, delete, and organize tasks
- 🎨 **Drag & Drop**: Intuitive drag-and-drop interface for task organization
- 📝 **Rich Text Editor**: Advanced text editing with formatting options
- 🏷️ **Categories & Priorities**: Organize tasks with categories and priority levels
- 📎 **File Attachments**: Attach files to tasks
- 🔄 **Recurring Tasks**: Set up recurring tasks with custom schedules
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile
- 🌙 **Dark/Light Theme**: Toggle between themes
- ⌨️ **Keyboard Shortcuts**: Power user shortcuts for efficiency
- 🔔 **Notifications**: Stay updated with task notifications

## 🏗️ Architecture

```
Taskly/
├── backend/          # Node.js/Express API
│   ├── api/         # API endpoints
│   ├── conn/        # Database connection
│   ├── models/      # MongoDB models
│   ├── routes/      # Express routes
│   └── app.js       # Main server file
├── frontend/         # React Application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── config/      # API configuration
│   │   ├── contexts/    # React contexts
│   │   ├── hooks/       # Custom hooks
│   │   └── store/       # Redux store
│   └── public/      # Static assets
└── DEPLOYMENT_GUIDE.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- MongoDB (local or Atlas)
- npm or yarn

### Local Development

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd Taskly
   ```

2. **Run the setup script:**
   ```bash
   ./setup.sh
   ```

3. **Set up environment variables:**
   
   **Backend (.env):**
   ```env
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/taskly
   FRONTEND_URL=http://localhost:3000
   ```

   **Frontend (.env):**
   ```env
   REACT_APP_API_URL=http://localhost:1000
   ```

4. **Start the applications:**
   
   **Backend:**
   ```bash
   cd backend
   npm start
   ```
   
   **Frontend:**
   ```bash
   cd frontend
   npm start
   ```

5. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:1000

## 🛠️ Technology Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **Multer** - File upload handling

### Frontend
- **React 18** - UI library
- **Redux Toolkit** - State management
- **React Router** - Routing
- **@dnd-kit** - Drag and drop
- **React Quill** - Rich text editor
- **Axios** - HTTP client
- **React Toastify** - Notifications

## 📦 API Endpoints

### Authentication
- `POST /api/v1/register` - User registration
- `POST /api/v1/signin` - User login

### Tasks
- `GET /api/v2/getTasks/:userId` - Get user tasks
- `POST /api/v2/addTask` - Create new task
- `PUT /api/v2/updateTask/:id` - Update task
- `DELETE /api/v2/deleteTask/:id` - Delete task
- `PATCH /api/v2/toggleTask/:id` - Toggle task completion

### Categories & Filters
- `GET /api/v2/categories/:userId` - Get task categories
- `GET /api/v2/tasksByPriority/:userId/:priority` - Filter by priority
- `GET /api/v2/overdueTasks/:userId` - Get overdue tasks

### Subtasks
- `POST /api/v2/addSubtask/:taskId` - Add subtask
- `PATCH /api/v2/toggleSubtask/:taskId/:subtaskId` - Toggle subtask
- `DELETE /api/v2/deleteSubtask/:taskId/:subtaskId` - Delete subtask

### Attachments
- `POST /api/v2/uploadAttachment` - Upload file
- `GET /api/v2/downloadAttachment/:id` - Download file
- `DELETE /api/v2/deleteAttachment/:id` - Delete file

## 🚀 Deployment

This project is configured for separate backend and frontend deployments. See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

### Quick Deployment Options

**Backend:**
- Railway (Recommended)
- Render
- Heroku
- Docker

**Frontend:**
- Vercel (Recommended)
- Netlify

## 🧪 Testing

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

## 📱 Mobile Support

The application is fully responsive and works on:
- Desktop browsers
- Tablet devices
- Mobile phones
- Progressive Web App (PWA) support

## ⌨️ Keyboard Shortcuts

- `Ctrl/Cmd + N` - New task
- `Ctrl/Cmd + S` - Save task
- `Ctrl/Cmd + D` - Delete task
- `Ctrl/Cmd + F` - Focus search
- `Esc` - Close modals

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

If you encounter any issues:

1. Check the [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
2. Review the troubleshooting section
3. Check the application logs
4. Verify environment variables

## 🎯 Roadmap

- [ ] Real-time collaboration
- [ ] Team workspaces
- [ ] Advanced analytics
- [ ] Mobile app
- [ ] API rate limiting
- [ ] Email notifications
- [ ] Calendar integration

---

**Built with ❤️ using React and Node.js**