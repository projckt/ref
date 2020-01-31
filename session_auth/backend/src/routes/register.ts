import { Router } from "express";
import { registerSchema } from "../validation";
const router = Router();
router.post("/register", async (req, res) => {
  await registerSchema.validateAsync(req.body, { abortEarly: false });
  const { fname, lname, email, password, passwordConfirmation } = req.body;
  res.json({
    fname: fname,
    lname: lname,
    email: email,
    isPasswordMatching: true
  });
});

export default router;
