import { Router } from "express";
import { User } from "../models/User";
import { logIn } from "../helpers";
import { isUserLogged } from "../middleware";
import { registerValidation } from "../validation";
import * as argon from "argon2";
const router = Router();

router.post("/register", isUserLogged, async (req, res) => {
  if (res.locals.isUserLogged) {
    let resp = {
      status: "failed",
      message: "You are already registered"
    };
    return res.status(400).json(resp);
  }
  let { error } = registerValidation(req.body);
  if (error) {
    let resp = {
      status: "failed",
      msg: error.details[0].message
    };
    return res.status(400).json(resp);
  }
  const { firstName, lastName, email } = req.body;
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
    firstName,
    lastName,
    email,
    password
  });
  logIn(req, res, user._id);
  let resp = {
    status: "success",
    msg: "User Successfully Created"
  };
  res.json(resp);
});

export default router;
