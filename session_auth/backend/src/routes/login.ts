import { Router } from "express";
import { loginValidation } from "../validation";

const router = Router();
router.post("/login", (req, res) => {
  res.send("hit on /login");
  let { error } = loginValidation(req.body);
  if (error) {
    let resp = {
      status: "failed",
      msg: error.details[0].message
    };
    return res.status(400).json(resp);
  }
});

export default router;
