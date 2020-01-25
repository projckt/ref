const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("lel");
});

router.post("/register", (req, res) => {
  console.log(req.body);
  res.send("hit");
});

module.exports = router;
