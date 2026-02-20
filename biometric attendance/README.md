# College Biometric Attendance System (Face Recognition)

A professional web-based biometric attendance system for colleges using **Face Recognition**.
This system allows students to register their face and mark attendance using a webcam.

Built with:

* Node.js + Express
* MongoDB Atlas
* face-api.js (AI Face Recognition)
* HTML, CSS, JavaScript

---

## Features

### Student

* Face Registration
* Mark Attendance via Webcam
* One attendance per day (duplicate prevention)

### Admin

* View all attendance records
* Simple dashboard interface

### System

* Real-time face detection
* Biometric face descriptor storage
* GitHub & cloud deployable
* Works without external biometric hardware

---

## Project Structure

```
biometric-attendance/
│
├── public/
│   ├── index.html
│   ├── register.html
│   ├── attendance.html
│   ├── admin.html
│   ├── css/
│   │     style.css
│   └── js/
│         face.js
│
├── server.js
├── package.json
└── README.md
```

---

## Installation (Local Setup)

### 1. Clone Repository

```
git clone https://github.com/your-username/biometric-attendance.git
cd biometric-attendance
```

### 2. Install Dependencies

```
npm install
```

### 3. Setup MongoDB

Create a free database on **MongoDB Atlas**
Replace connection string in `server.js`:

```
mongoose.connect("YOUR_MONGODB_URI");
```

### 4. Run Server

```
npm start
```

Open browser:

```
http://localhost:3000
```

---

## Deployment

### Backend

Deploy on:

* Render (recommended)
* Railway

### Frontend

Automatically served by Express.

---

## How It Works

1. Student registers face via webcam
2. System extracts **128-point face descriptor**
3. Descriptor stored in MongoDB
4. During attendance:

   * Face scanned
   * Compared with stored data
   * Attendance marked if matched

---

## Technologies Used

* Node.js
* Express.js
* MongoDB
* face-api.js
* HTML5 Camera API
* JavaScript

---

## Future Improvements

* Admin Login (JWT)
* Subject-wise attendance
* Attendance analytics dashboard
* CSV export
* Liveness detection (anti-photo spoofing)
* Cloud image storage
* Mobile responsive UI

---

## Use Cases

* College attendance system
* Classroom management
* Training institutes
* Office attendance

---

## Author

**Siddharth Singh**
CSE (AI/ML)

---

## License

This project is open-source and free to use for educational purposes.
