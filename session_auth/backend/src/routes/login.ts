import { Router } from "express";
import { logIn } from "../helpers";
import { isUserLogged } from "../middleware";
import { loginValidation } from "../validation";
import { User } from "../models";

const router = Router();
router.post("/login", isUserLogged, async (req, res) => {
  if (res.locals.isUserLogged) {
    let resp = {
      status: "failed",
      message: "You are already logged in"
    };
    return res.status(400).json(resp);
  }
  let { error } = loginValidation(req.body);
  if (error) {
    let resp = {
      status: "failed",
      msg: error.details[0].message
    };
    return res.status(400).json(resp);
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.passwordMatch(password))) {
    let resp = {
      status: "failed",
      msg: "Invalid email or password"
    };
    return res.status(400).json(resp);
  }
  logIn(req, user!._id);
  let resp = {
    status: "success",
    msg: "User Logged In"
  };
  res.json(resp);
});

export default router;
