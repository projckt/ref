const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    min: 1,
    max: 255
  },
  lname: {
    type: String,
    required: true,
    min: 1,
    max: 255
  },
  email: {
    type: String,
    required: true,
    min: 5,
    max: 255
  },
  pass: {
    type: String,
    required: true,
    max: 1024,
    min: 6
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", userSchema);
