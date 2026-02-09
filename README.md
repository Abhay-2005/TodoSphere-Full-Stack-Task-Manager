# 📝 Full Stack Todo Application with Authentication

A modern, secure, and user-friendly task management application built with the MERN stack (MongoDB, Express.js, React-like Frontend, Node.js).

## 🚀 Features

- ✅ **User Authentication** - Secure registration and login with JWT
- 🔐 **Password Encryption** - Passwords hashed with bcrypt
- 📋 **Task Management** - Create, read, update, and delete tasks
- ✔️ **Task Completion** - Mark tasks as completed/incomplete
- 💾 **Persistent Storage** - All data stored in MongoDB
- 🎨 **Modern UI** - Clean, responsive interface with smooth animations
- 🔒 **Protected Routes** - Authentication required for task operations
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Structure and layout
- **CSS3** - Styling with modern animations
- **JavaScript (ES6+)** - Dynamic functionality and API integration
- **Fetch API** - HTTP requests to backend

### Backend
- **Node.js** - Server runtime environment
- **Express.js** - Web framework for RESTful APIs
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT (jsonwebtoken)** - Authentication tokens
- **bcrypt.js** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📂 Project Structure

```
TodoApp/
├── backend/
│   ├── server.js              # Main server file
│   ├── package.json           # Backend dependencies
│   ├── .env.example          # Environment variables template
│   ├── models/
│   │   └── user.js           # User & Todo schema
│   └── middleware/
│       └── auth.js           # JWT authentication middleware
│
└── frontend/
    ├── index.html            # Main HTML file
    └── script.js             # Frontend JavaScript
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

### Step 1: Clone or Download the Project

```bash
git clone <your-repository-url>
cd TodoApp
```

### Step 2: Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Edit `.env` file with your configuration:

**For Local MongoDB:**
```env
MONGODB_URI=mongodb://localhost:27017/todoapp
JWT_SECRET=your-super-secret-key-change-this
PORT=5000
```

**For MongoDB Atlas (Cloud):**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-key-change-this
PORT=5000
```

### Step 3: Start MongoDB (if using local)

```bash
# On macOS/Linux
mongod

# On Windows
mongod.exe
```

### Step 4: Start Backend Server

```bash
# Development mode with auto-restart
npm run dev

# Production mode
npm start
```

You should see:
```
🚀 Server is running on port 5000
✅ Connected to MongoDB
```

### Step 5: Frontend Setup

1. Open a new terminal and navigate to frontend:
```bash
cd frontend
```

2. Open `index.html` in your browser:
   - **Option 1:** Double-click `index.html`
   - **Option 2:** Use Live Server in VS Code
   - **Option 3:** Use Python's HTTP server:
   ```bash
   python -m http.server 8080
   ```
   Then visit `http://localhost:8080`

## 🎯 Usage Guide

### 1. Register a New Account
- Click on the "Register" tab
- Enter username (minimum 3 characters)
- Enter a valid email address
- Create a password (minimum 6 characters)
- Click "Register"

### 2. Login
- Click on the "Login" tab
- Enter your email and password
- Click "Login"

### 3. Managing Tasks

**Add a Task:**
- Enter task title (required)
- Add description (optional)
- Click "Add Task"

**Complete a Task:**
- Click the checkbox next to the task

**Edit a Task:**
- Click "Edit" button
- Modify title and/or description
- Confirm changes

**Delete a Task:**
- Click "Delete" button
- Confirm deletion

**Logout:**
- Click "Logout" button in the header

## 🔐 API Endpoints

### Authentication Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |
| GET | `/api/auth/profile` | Get user profile | Yes |

### Todo Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/todos` | Get all user todos | Yes |
| POST | `/api/todos` | Create new todo | Yes |
| PUT | `/api/todos/:id` | Update todo | Yes |
| DELETE | `/api/todos/:id` | Delete todo | Yes |

### Health Check

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/health` | Server health check | No |

## 📱 API Request Examples

### Register User
```javascript
POST /api/auth/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login User
```javascript
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Create Todo (Requires Authentication)
```javascript
POST /api/todos
Content-Type: application/json
Authorization: Bearer <your-jwt-token>

{
  "title": "Complete project documentation",
  "description": "Write comprehensive README file"
}
```

### Update Todo
```javascript
PUT /api/todos/:id
Content-Type: application/json
Authorization: Bearer <your-jwt-token>

{
  "title": "Updated title",
  "description": "Updated description",
  "completed": true
}
```

## 🧪 Testing the Application

### Using Postman

1. **Register a User:**
   - Method: POST
   - URL: `http://localhost:5000/api/auth/register`
   - Body (JSON):
   ```json
   {
     "username": "testuser",
     "email": "test@example.com",
     "password": "test123"
   }
   ```

2. **Login:**
   - Method: POST
   - URL: `http://localhost:5000/api/auth/login`
   - Body (JSON):
   ```json
   {
     "email": "test@example.com",
     "password": "test123"
   }
   ```
   - Copy the token from response

3. **Create Todo:**
   - Method: POST
   - URL: `http://localhost:5000/api/todos`
   - Headers: `Authorization: Bearer <your-token>`
   - Body (JSON):
   ```json
   {
     "title": "My first task",
     "description": "This is a test task"
   }
   ```

## 🔒 Security Features

- ✅ Passwords are hashed using bcrypt (salt rounds: 10)
- ✅ JWT tokens for secure authentication
- ✅ Protected API routes require valid JWT
- ✅ Input validation on both frontend and backend
- ✅ XSS protection with HTML escaping
- ✅ CORS enabled for cross-origin requests

## 🐛 Troubleshooting

### MongoDB Connection Issues

**Error:** `MongoNetworkError: failed to connect to server`

**Solutions:**
- Ensure MongoDB is running
- Check MongoDB URI in `.env` file
- For Atlas: Verify network access and credentials

### Port Already in Use

**Error:** `EADDRINUSE: address already in use :::5000`

**Solution:**
```bash
# Find process using port 5000
lsof -i :5000  # macOS/Linux
netstat -ano | findstr :5000  # Windows

# Kill the process
kill -9 <PID>  # macOS/Linux
taskkill /PID <PID> /F  # Windows
```

### CORS Errors

**Error:** `Access to fetch at ... has been blocked by CORS policy`

**Solution:**
- Ensure backend server is running
- Check CORS is enabled in `server.js`
- Frontend must use correct API URL

### JWT Token Issues

**Error:** `Token is invalid or expired`

**Solutions:**
- Login again to get a new token
- Clear localStorage and login again
- Check JWT_SECRET matches between requests

## 📈 Future Enhancements

- [ ] Task categories and tags
- [ ] Due dates and reminders
- [ ] Task priority levels
- [ ] Search and filter functionality
- [ ] Drag-and-drop task reordering
- [ ] Dark mode toggle
- [ ] Email verification
- [ ] Password reset functionality
- [ ] Task sharing between users
- [ ] Real-time updates with WebSockets

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Developed with ❤️ by [Your Name]

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Check existing issues for solutions
- Review the troubleshooting section

## 🙏 Acknowledgments

- MongoDB documentation
- Express.js community
- JWT.io for token debugging
- Stack Overflow community

---

**Happy Task Managing! 🎉**
