const router = require("express").Router();
const User = require("../models/User");
const Joi = require("@hapi/joi");

const registerIpSchema = Joi.object({
  fname: Joi.string()
    .min(1)
    .required(),
  lname: Joi.string()
    .min(1)
    .required(),
  email: Joi.string()
    .min(5)
    .required()
    .email(),
  pass: Joi.string()
    .min(6)
    .required()
});

router.post("/register", (req, res) => {
  const validation = registerIpSchema.validate(req.body);
  res.send(validation);
  // const user = new User({
  //   fname: req.body.fname,
  //   lname: req.body.lname,
  //   email: req.body.email,
  //   pass: req.body.pass
  // });
  // try {
  //   const savedUser = await user.save();
  //   res.send(savedUser);
  // } catch (err) {
  //   res.status(400).end(err);
  // }
});

module.exports = router;
