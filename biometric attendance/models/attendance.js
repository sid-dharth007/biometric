const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  roll: String,
  date: String,
  time: String
});

module.exports = mongoose.model("Attendance", AttendanceSchema);