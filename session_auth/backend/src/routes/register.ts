import { Router } from "express";
import { User } from "../models/User";
import { logIn } from "../helpers";
import { isUserGuest } from "../middleware";
import { registerValidation } from "../validation";
import * as argon from "argon2";
const router = Router();

router.post("/register", isUserGuest, async (req, res) => {
  let { error } = registerValidation(req.body);
  if (error) {
    let resp = {
      status: "failed",
      msg: error.details[0].message
    };
    return res.status(400).json(resp);
  }
  const { fname, lname, email, passwordConfirmation } = req.body;
  let password = req.body.password;
  let isUserRegistered = await User.exists({ email });
  if (isUserRegistered) {
    let resp = {
      status: "failed",
      msg: "Invalid Email"
    };
    res.json(resp);
  }
  password = await argon.hash(password, { type: argon.argon2id });
  const user = await User.create({
    fname,
    lname,
    email,
    password
  });
  let resp = {
    status: "success",
    msg: "User Successfully Created"
  };
  logIn(req, user._id);
  res.json(resp);
});

export default router;
