const router = require("express").Router();
const argon = require("argon2");
const User = require("../models/User");
const { registerValidation } = require("../validation");

router.post("/register", async (req, res) => {
  let { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let emailExists = await User.findOne({ Email: req.body.Email });
  if (emailExists) return res.status(400).send("Email already exists");

  let hash = await argon.hash(req.body.Password);
  res.send(hash);

  const user = new User({
    First_Name: req.body.First_Name,
    Last_Name: req.body.Last_Name,
    Email: req.body.Email,
    Password: req.body.Password
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).end(err);
  }
});

module.exports = router;
