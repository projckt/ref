import { Router } from "express";
import { registerSchema } from "../validation";
import { User } from "../models/User";
import { logIn } from "../helpers";
import { guest } from "../middleware";
import * as argon from "argon2";
const router = Router();

router.post("/register", guest, async (req, res) => {
  await registerSchema.validateAsync(req.body, { abortEarly: false });
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
