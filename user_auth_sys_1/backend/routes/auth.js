const router = require("express").Router();
const User = require("../models/User");

router.post("/register", (req, res) => {
  console.log(req.body);
  res.send("hit");
});

module.exports = router;
