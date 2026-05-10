# 🚀 Team Task Manager (Full Stack)

## 📌 Project Overview

This is a full-stack web application where users can:

* Create accounts (Signup/Login)
* Create and manage tasks
* Track task status (Pending / In Progress / Done)
* View all tasks in a dashboard

---

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

---

## 🔐 Features

✅ User Authentication (Signup & Login)
✅ Create Tasks
✅ Update Task Status
✅ Dashboard to view all tasks
✅ Role-ready structure (Admin/Member expandable)
✅ REST API architecture

---

## 📁 Project Structure

```
mkdir-team-task-manager/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── signup.html
│   ├── dashboard.html
│   ├── style.css
│   └── script.js
│
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/Anchaldap/mkdir-team-task-manager.git
cd mkdir-team-task-manager
```

---

### 2️⃣ Install Dependencies

```
npm install
```

---

### 3️⃣ Setup Environment Variables

Create a file:

```
backend/.env
```

Add:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=secretkey
```

---

### 4️⃣ Run Backend Server

```
node backend/server.js
```

---

### 5️⃣ Run Frontend

Open:

```
frontend/index.html
```

Or use Live Server.

---

## 🌐 API Endpoints

### Auth

* POST `/auth/signup`
* POST `/auth/login`

### Tasks

* GET `/tasks`
* POST `/tasks`
* PUT `/tasks/:id`

---

## 🚀 Deployment

Backend deployed on Railway
Frontend served via static hosting (or same server)

👉 Live URL: **https://turbo-fishstick-7vw4vwj6g7993pvqq-5500.app.github.dev/frontend/**

---



---

## 👨‍💻 Author

**Anchal Patel**

---

## 📌 Notes

* MongoDB Atlas used for cloud database
* JWT used for authentication
* Simple UI for demonstration purpose

---
