# ⚡ Quick Start Guide

## 🚀 Get Up and Running in 5 Minutes

### 1️⃣ Install MongoDB

**Option A: MongoDB Atlas (Cloud - Recommended for Beginners)**
1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a free cluster (M0 Sandbox)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your database password

**Option B: Local MongoDB**
- **macOS:** `brew install mongodb-community`
- **Windows:** Download from [mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
- **Linux:** `sudo apt-get install mongodb`

### 2️⃣ Setup Backend

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env and add your MongoDB URI
# For Atlas: MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp
# For Local: MONGODB_URI=mongodb://localhost:27017/todoapp

# Start the server
npm start
```

✅ You should see: `🚀 Server is running on port 5000` and `✅ Connected to MongoDB`

### 3️⃣ Setup Frontend

```bash
# Open frontend folder in a new terminal
cd frontend

# Option 1: Open index.html directly in browser
# Just double-click index.html

# Option 2: Use VS Code Live Server
# Right-click index.html → "Open with Live Server"

# Option 3: Use Python HTTP Server
python -m http.server 8080
# Then visit: http://localhost:8080
```

### 4️⃣ Test the Application

1. **Register**: Create a new account
2. **Login**: Sign in with your credentials
3. **Add Tasks**: Create your first todo
4. **Manage**: Edit, complete, or delete tasks

## 🎯 Common Issues

### ❌ "Cannot connect to MongoDB"
- **Atlas**: Check if your IP is whitelisted (Network Access in Atlas)
- **Local**: Make sure MongoDB is running (`mongod` command)

### ❌ "Port 5000 already in use"
- Change PORT in `.env` to another number (e.g., 3000)

### ❌ "CORS error"
- Make sure backend server is running
- Check API_URL in `frontend/script.js` matches your backend port

## 📝 Default Configuration

- **Backend Port:** 5000
- **Frontend:** Any browser (Chrome, Firefox, Safari, Edge)
- **Database Name:** todoapp
- **JWT Expiry:** 7 days

## 🔗 Important URLs

- **API Base:** http://localhost:5000/api
- **Health Check:** http://localhost:5000/api/health
- **Frontend:** Open index.html in browser

## 📚 Next Steps

1. Read the full [README.md](README.md) for detailed documentation
2. Check out the API endpoints section
3. Explore the code structure
4. Try building new features!

---

**Need Help?** Check the Troubleshooting section in README.md
