import { Router } from "express";
import { logOut } from "../helpers";
const router = Router();
router.post("/logout", async (req, res) => {
  await logOut(req, res);
});

export default router;
