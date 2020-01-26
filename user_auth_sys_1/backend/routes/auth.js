const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const user = new User({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    pass: req.body.pass
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).end(err);
  }
  res.send("hit");
});

module.exports = router;
