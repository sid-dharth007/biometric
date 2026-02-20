const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

mongoose.connect("YOUR_MONGODB_URI");

const Student = mongoose.model("Student", {
  name: String,
  roll: String,
  faceDescriptor: Array
});

const Attendance = mongoose.model("Attendance", {
  roll: String,
  date: String,
  time: String
});

// Register Student
app.post("/register", async (req, res) => {
  const { name, roll, descriptor } = req.body;
  await Student.create({ name, roll, faceDescriptor: descriptor });
  res.send("Student Registered");
});

// Get Students
app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// Mark Attendance
app.post("/attendance", async (req, res) => {
  const today = new Date().toDateString();

  const exists = await Attendance.findOne({
    roll: req.body.roll,
    date: today
  });

  if (exists) return res.send("Already Marked");

  await Attendance.create({
    roll: req.body.roll,
    date: today,
    time: new Date().toLocaleTimeString()
  });

  res.send("Attendance Marked");
});

// Get Attendance
app.get("/attendance", async (req, res) => {
  const data = await Attendance.find();
  res.json(data);
});
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));