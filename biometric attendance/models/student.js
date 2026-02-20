const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  roll: String,
  faceDescriptor: Array
});

module.exports = mongoose.model("Student", StudentSchema);