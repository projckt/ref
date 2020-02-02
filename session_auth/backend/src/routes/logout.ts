import { Router } from "express";
const router = Router();
router.post("/logout", (req, res) => {
  res.send("HIT on /logout");
});

export default router;
