const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("lel");
});

router.post("/register", (req, res) => {
  const { firstName, lastname, email, password } = req.body;
  res.send("hit");
});

module.exports = router;
