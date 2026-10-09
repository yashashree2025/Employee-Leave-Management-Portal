# Employee Leave Management Portal

A Full Stack MERN application developed to digitize and simplify the employee leave management process.

---

## 📌 Project Overview

The Employee Leave Management Portal is a full-stack web application designed to digitize and simplify the employee leave management process.

The system provides separate functionalities for Employees and HR personnel. Employees can securely register, log in, apply for leave, and track the status of their leave requests. HR personnel can view and manage all leave requests, search for employees, filter requests by status, and approve or reject leave applications.

The application is developed using the MERN Stack (MongoDB, Express.js, React.js, and Node.js) and implements JWT-based authentication, bcrypt password hashing, role-based authorization, RESTful APIs, and a responsive Bootstrap-based user interface.

The project follows a structured client-server architecture with separate frontend and backend modules for better maintainability and scalability.

---

## 🚀 Features

### 👤 Employee Features

* Employee registration and secure login
* JWT-based authentication
* Apply for leave with leave type, dates, and reason
* View personal leave history and request status
* Dashboard with leave statistics
* Responsive and user-friendly interface
* Toast notifications for important actions

### 👨‍💼 HR Features

* Secure HR login with role-based authorization
* HR dashboard with leave management statistics
* View all employee leave requests
* Search employees by name or other relevant details
* Filter leave requests by status
* Approve or reject leave requests
* Export leave reports in CSV format
* Responsive Bootstrap-based dashboard

### 🔐 Security Features

* Password hashing using bcrypt.js
* JWT-based authentication
* Role-based authorization for Employee and HR users
* Protected frontend routes
* Backend authorization for secured API endpoints
* Environment variables for sensitive configuration

---

## 🛠️ Tech Stack

### Frontend

| Technology       | Purpose                                      |
| ---------------- | -------------------------------------------- |
| React.js         | Building reusable user interface components  |
| React Router DOM | Client-side routing and protected navigation |
| Axios            | Communication with backend REST APIs         |
| Bootstrap        | Responsive UI design and layout              |
| React Toastify   | User notifications and feedback              |
| Papa Parse       | Generating CSV reports                       |

### Backend

| Technology | Purpose                                    |
| ---------- | ------------------------------------------ |
| Node.js    | Server-side JavaScript runtime             |
| Express.js | Building RESTful APIs and backend services |

### Database

| Technology    | Purpose                                       |
| ------------- | --------------------------------------------- |
| MongoDB Compass |  NoSQL database                    |
| Mongoose      | MongoDB object modeling and schema management |

### Authentication & Security

| Technology           | Purpose                               |
| -------------------- | ------------------------------------- |
| JSON Web Token (JWT) | User authentication and authorization |
| bcrypt.js            | Secure password hashing               |

### Development Tools

| Tool               | Purpose                                       |
| ------------------ | --------------------------------------------- |
| Visual Studio Code | Application development                       |
| Git                | Version control                               |
| GitHub             | Source code hosting and repository management |
| Postman            | REST API testing                              |

---

## 🏗️ Project Architecture

The application follows a client-server architecture using the MERN Stack.

```text
             Employee / HR User
                     |
                     v
            React.js Frontend
          Pages, Components, Router
                     |
                     | Axios / REST API
                     v
             Node.js + Express
            Routes and Controllers
           Authentication Middleware
                     |
                     | Mongoose
                     v
                 MongoDB
            Employee Data
            Leave Requests
```

---

## 📂 Project Structure

The project is organized into separate frontend and backend modules to maintain a clean and scalable application structure.

```text
Employee-Leave-Management-Portal/
│
├── client/                  # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Application pages
│   │   ├── App.jsx          # Main application component
│   │   ├── main.jsx         # React entry point
│   │   └── index.css        # Global styles
│   ├── package.json
│   └── .env.example
│
├── server/                  # Node.js + Express backend
│   ├── config/              # Database configuration
│   ├── controllers/         # Request handling logic
│   ├── middleware/          # Authentication and authorization
│   ├── models/              # Mongoose schemas and models
│   ├── routes/              # REST API routes
│   ├── server.js            # Backend entry point
│   ├── package.json
│   └── .env.example
│
├── screenshots/             # Application screenshots (optional)
├── .gitignore
└── README.md
```

---

## 🔐 Authentication & Authorization

The application implements authentication and role-based authorization for Employees and HR users.

* Passwords are hashed using bcrypt.js before being stored.
* JWT tokens are used to authenticate users and authorize protected API requests.
* Protected frontend routes restrict access to authenticated users.
* Backend middleware validates authentication and user roles before allowing access to secured endpoints.
* Role-based authorization ensures that HR-specific operations can only be performed by authorized HR users.

---

## 📊 Dashboard Features

### Employee Dashboard

* Total Leaves
* Pending Leaves
* Approved Leaves
* Rejected Leaves

### HR Dashboard

* Total Employees
* Total Requests
* Pending Requests
* Approved Requests
* Rejected Requests

---

## 🔗 REST APIs

The application provides RESTful APIs for authentication and employee leave management.

### Authentication APIs

| Method | Endpoint             | Description                         | Access |
| ------ | -------------------- | ----------------------------------- | ------ |
| POST   | `/api/auth/register` | Register a new employee             | Public |
| POST   | `/api/auth/login`    | Authenticate an employee or HR user | Public |

### Leave Management APIs

| Method | Endpoint            | Description                                  | Access   |
| ------ | ------------------- | -------------------------------------------- | -------- |
| POST   | `/api/leaves/apply` | Submit a new leave request                   | Employee |
| GET    | `/api/leaves/my`    | View the logged-in employee's leave requests | Employee |
| GET    | `/api/leaves`       | View all employee leave requests             | HR       |
| PUT    | `/api/leaves/:id`   | Approve or reject a leave request            | HR       |

*Note: API endpoints should be updated if the actual implementation uses different routes.*

---


---

## ▶️ Installation

### Prerequisites

Install the following before running the project:

* Node.js and npm
* MongoDB or a MongoDB Compass account
* Git

### 1. Clone the Repository

```bash
git clone https://github.com/yashashree2025/Employee-Leave-Management-Portal.git
cd Employee-Leave-Management-Portal
```

### 2. Install and Configure the Backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder using your own configuration:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_new_secret_key
```

Add any other environment variables required by your application. Never commit real credentials to GitHub.

### 3. Start the Backend

```bash
npm run dev
```

Use the appropriate script listed in `server/package.json` if `npm run dev` is not configured.

### 4. Install and Start the Frontend

Open a new terminal from the project root:

```bash
cd client
npm install
```

Create a client `.env` file if required by your application:

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

Open the local URL displayed in the terminal.

---

## 🌐 Environment Variables

### Server

Create `server/.env` locally with the variables required by your backend.

| Variable     | Description                                  |
| ------------ | -------------------------------------------- |
| `PORT`       | Backend server port                          |
| `MONGO_URI`  | MongoDB connection string                    |
| `JWT_SECRET` | Secret used for JWT signing and verification |

### Client

| Variable       | Description          |
| -------------- | -------------------- |
| `VITE_API_URL` | Backend API base URL |

The actual variable names must match your application's code. Keep `.env` files and credentials private.

---

## 👨‍💼 Demo Login Credentials

For security, demo credentials are not published in this repository. Configure test accounts locally or provide temporary demo accounts through a secure channel.

Newly registered users are assigned the Employee role by default, if configured that way in the application. HR access should be granted only by an authorized administrator.

---

## 📚 Learning Outcomes

* MERN Stack Development
* REST API Development
* MongoDB Integration
* JWT Authentication
* Role-Based Authorization
* React Routing
* CRUD Operations
* Responsive UI Design
* Client-Server Architecture
* Version Control with Git and GitHub

---

## 👩‍💻 Developer

**Yashashree Parte**

GitHub: [yashashree2025](https://github.com/yashashree2025)

LinkedIn: [Yashashree Parte](https://www.linkedin.com/in/yashashreeparte/)

---

## 📄 License

This project is developed for educational purposes.
