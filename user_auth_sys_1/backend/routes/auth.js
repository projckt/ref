const router = require("express").Router();
const argon = require("argon2");
const User = require("../models/User");
const { registerValidation, loginValidation } = require("../validation");

router.post("/register", async (req, res) => {
  let resp = {};
  let { error } = registerValidation(req.body);
  if (error) {
    resp.status = "failed";
    resp.msg = error.details[0].message;
    return res.status(400).json(resp);
  }

  let emailExists = await User.findOne({ Email: req.body.Email });
  if (emailExists) {
    resp.status = "failed";
    resp.msg = "Email already exists";
    return res.status(400).json(resp);
  }

  let hashedPassword = await argon.hash(req.body.Password);
  const user = new User({
    First_Name: req.body.First_Name,
    Last_Name: req.body.Last_Name,
    Email: req.body.Email,
    Password: hashedPassword
  });
  try {
    let createdUser = await user.save();
    if (createdUser._id) {
      resp.status = "success";
      resp.msg = "User Created";
      return res.json(resp);
    } else {
      resp.status = "failed";
      resp.msg = "Something went wrong";
      return res.json(resp);
    }
  } catch (err) {
    resp.status = "failed";
    resp.msg = err;
    res.json(resp);
    return res.status(400).json(resp);
  }
});

router.post("/login", async (req, res) => {
  let resp = {};
  let { error } = loginValidation(req.body);
  if (error) {
    resp.status = "failed";
    resp.msg = error.details[0].message;
    return res.status(400).json(resp);
  }
  let user = await User.findOne({ Email: req.body.Email });
  if (!user) {
    resp.status = "failed";
    resp.msg = "Email is wrong";
    return res.status(400).json(resp);
  }
  const isPassValid = await argon.verify(user.Password, req.body.Password);
  if (!isPassValid) {
    resp.status = "failed";
    resp.msg = "Password is wrong";
    return res.status(400).json(resp);
  }
  res.send("logged in");
});

module.exports = router;
