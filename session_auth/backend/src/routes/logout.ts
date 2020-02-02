import { Router } from "express";
import { logOut } from "../helpers";
import { isUserLogged } from "../middleware";

const router = Router();
router.post("/logout", isUserLogged, async (req, res) => {
  await logOut(req, res);
});

export default router;
