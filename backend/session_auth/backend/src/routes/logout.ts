import { Router } from "express";
import { logOut } from "../helpers";
import { isUserLogged } from "../middleware";

const router = Router();
router.post("/logout", isUserLogged, async (req, res) => {
  if (!res.locals.isUserLogged) {
    let resp = {
      status: "failed",
      message: "You must be logged in to logout"
    };
    return res.status(400).json(resp);
  }
  await logOut(req, res);
});

export default router;
