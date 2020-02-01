import { Router } from "express";
import { registerSchema } from "../validation";
import { User } from "../models/User";
import { logIn } from "../helpers/auth";
const router = Router();

router.post("/register", async (req, res) => {
  await registerSchema.validateAsync(req.body, { abortEarly: false });
  const { fname, lname, email, password, passwordConfirmation } = req.body;
  let isUserRegistered = await User.exists({ email });
  if (isUserRegistered) {
    let resp = {
      status: "failed",
      msg: "Invalid Email"
    };
    res.json(resp);
  }

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
