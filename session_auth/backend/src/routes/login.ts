import { Router } from "express";
const router = Router();
router.post("/login", (req, res) => {
  res.send("hit on /login");
});

export default router;
