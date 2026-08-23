# Employee Leave Management Portal

A Full Stack MERN application developed to digitize the employee leave management process.

---

## 📌 Project Overview

The Employee Leave Management Portal is a full-stack web application designed to digitize and simplify the employee leave management process.

The system provides separate functionalities for Employees and HR personnel. Employees can securely register, log in, apply for leave, and track the status of their leave requests. HR personnel can view and manage all leave requests, search for employees, filter requests by status, and approve or reject leave applications.

The application is developed using the MERN Stack (MongoDB, Express.js, React.js, and Node.js) and implements JWT-based authentication, bcrypt password hashing, role-based authorization, RESTful APIs, and a responsive Bootstrap-based user interface.

The project follows a structured client-server architecture with separate frontend and backend modules for better maintainability and scalability.

---

## 🚀 Features

### 👤 Employee Features

- Employee registration and secure login
- JWT-based authentication
- Apply for leave with leave type, dates, and reason
- View personal leave history and request status
- Dashboard with leave statistics
- Responsive and user-friendly interface
- Toast notifications for important actions

### 👨‍💼 HR Features

- Secure HR login with role-based authorization
- HR dashboard with leave management statistics
- View all employee leave requests
- Search employees by name or other relevant details
- Filter leave requests by status
- Approve or reject leave requests
- Export leave reports in CSV format
- Responsive Bootstrap-based dashboard

### 🔐 Security Features

- Password hashing using bcrypt
- JWT-based authentication
- Role-based authorization for Employee and HR users
- Protected frontend routes
- Backend authorization for secured API endpoints
- Environment variables for sensitive configuration

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| React.js | Building reusable user interface components |
| React Router DOM | Client-side routing and protected navigation |
| Axios | Communication with backend REST APIs |
| Bootstrap | Responsive UI design and layout |
| React Toastify | User notifications and feedback |
| Papa Parse | Generating CSV reports |

### Backend

| Technology | Purpose |
|---|---|
| Node.js | Server-side JavaScript runtime |
| Express.js | Building RESTful APIs and backend services |

### Database

| Technology | Purpose |
|---|---|
| MongoDB Atlas | Cloud-based NoSQL database |
| Mongoose | MongoDB object modeling and schema management |

### Authentication & Security

| Technology | Purpose |
|---|---|
| JSON Web Token (JWT) | User authentication and session authorization |
| bcrypt.js | Secure password hashing |

### Development Tools

| Tool | Purpose |
|---|---|
| Visual Studio Code | Application development |
| Git | Version control |
| GitHub | Source code hosting and repository management |
| Postman | REST API testing |


## 🏗️ Project Architecture
```text
The application follows a client-server architecture using the MERN Stack.
┌──────────────────────────────┐
│          Employee / HR       │
│            User              │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│       React.js Frontend      │
│  • Pages & Components        │
│  • React Router              │
│  • Bootstrap UI              │
└──────────────┬───────────────┘
               │
               │ Axios / REST API
               ▼
┌──────────────────────────────┐
│     Node.js + Express.js     │
│  • REST API Routes            │
│  • Controllers                │
│  • Middleware                 │
│  • JWT Authorization          │
└──────────────┬───────────────┘
               │
               │ Mongoose
               ▼
┌──────────────────────────────┐
│        MongoDB Atlas         │
│  • Employee Data             │
│  • Leave Requests            │
└──────────────────────────────┘
```
## 📂 Project Structure

The project is organized into separate frontend and backend modules to maintain a clean and scalable application structure.

```markdown
```text
Employee-Leave-Management-Portal/
│
├── client/                         # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/             # Reusable UI components
│   │   ├── pages/                  # Application pages
│   │   ├── App.jsx                 # Main application component
│   │   ├── main.jsx                # React entry point
│   │   └── index.css               # Global styles
│   ├── .env                        # Frontend environment variables
│   └── package.json
│
├── server/                         # Node.js + Express backend
│   ├── config/                     # Database configuration
│   ├── controllers/                # Request handling logic
│   ├── middleware/                 # Authentication & authorization
│   ├── models/                     # Mongoose schemas/models
│   ├── routes/                     # REST API routes
│   ├── .env                        # Backend environment variables
│   ├── server.js                   # Backend entry point
│   └── package.json
│
├── screenshots/                    # Application screenshots
├── .gitignore                      # Files excluded from Git
└── README.md                       # Project documentation
```

---

```markdown
## 🔐 Authentication & Authorization

The application implements secure authentication and role-based authorization for Employees and HR users.

- Passwords are securely hashed using bcrypt.js before being stored.
- JWT tokens are used to authenticate users and authorize protected API requests.
- Frontend protected routes restrict access to authenticated users.
- Backend middleware validates authentication and user roles before allowing access to secured endpoints.
- Role-based authorization ensures that HR-specific operations can only be performed by authorized HR users.

---

## 📊 Dashboard Features

### Employee Dashboard

- Total Leaves
- Pending Leaves
- Approved Leaves
- Rejected Leaves

### HR Dashboard

- Total Employees
- Total Requests
- Pending Requests
- Approved Requests
- Rejected Requests

---

## 🔗 REST APIs

The application provides RESTful APIs for authentication and employee leave management.

### Authentication APIs

| Method | Endpoint | Description | Access |
|---|---|---|---|
| POST | `/api/auth/register` | Register a new employee | Public |
| POST | `/api/auth/login` | Authenticate an employee or HR user | Public |

### Leave Management APIs

| Method | Endpoint | Description | Access |
|---|---|---|---|
| POST | `/api/leaves/apply` | Submit a new leave request | Employee |
| GET | `/api/leaves/my` | View the logged-in employee's leave requests | Employee |
| GET | `/api/leaves` | View all employee leave requests | HR |
| PUT | `/api/leaves/:id` | Approve or reject a leave request | HR |


## 📸 Screenshots

### Home Page
![Home Page](screenshots/home.png)

### Employee Login
![Employee Login](screenshots/employee-login.png)

### Register
![Register](screenshots/register.png)

### Employee Dashboard
![Employee Dashboard](screenshots/employee-dashboard.png)

### Apply Leave
![Apply Leave](screenshots/apply-leave.png)

### My Leaves
![My Leaves](screenshots/my-leaves.png)

### HR Login
![HR Login](screenshots/hr-login.png)

### HR Dashboard
![HR Dashboard](screenshots/hr-dashboard.png)

---

## ▶️ Installation

### Clone Repository

```bash
git clone https://github.com/Devika-2004/Employee-Leave-Management-Portal.git
```

### Client

```bash
cd client
npm install
npm run dev
```

### Server

```bash
cd server
npm install
npm run dev
```

---

## 🌐 Environment Variables

### Server
Create a `.env` file inside the **server** folder.

```
PORT=5000
MONGO_URI=Your MongoDB Connection String
JWT_SECRET=Your Secret Key
```
### Client

Create a .env file inside the client folder.

VITE_API_URL=http://localhost:5000
---

## 👨‍💼 Demo Login Credentials

### HR Login

Email : hr@gmail.com  
Password : hr@12345

### Employee Login

Email : devika@gmail.com  
Password : Devika@123

> **Note:** Employee registration is available through the Register page. By default, every newly registered user is assigned the **Employee** role. 

To provide HR access, the user's role must be changed from **Employee** to **HR** in the MongoDB database by an administrator. Only users with the **HR** role can access the HR Dashboard and HR-specific features.

---

## 📚 Learning Outcomes

- MERN Stack Development
- REST API Development
- MongoDB Integration
- JWT Authentication
- Role-Based Authorization
- React Routing
- CRUD Operations
- Responsive UI Design

---

## 👩‍💻 Developer

**Devika Warekar**

GitHub:
https://github.com/Devika-2004

LinkedIn:
https://www.linkedin.com/in/devikawarekar

---

## 📄 License

This project is developed for educational and internship purposes.