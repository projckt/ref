const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  First_Name: {
    type: String,
    required: true,
    min: 1,
    max: 255
  },
  Last_Name: {
    type: String,
    required: true,
    min: 1,
    max: 255
  },
  Email: {
    type: String,
    required: true,
    min: 5,
    max: 255
  },
  Password: {
    type: String,
    required: true,
    max: 1024,
    min: 6
  },
  Date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", userSchema);
