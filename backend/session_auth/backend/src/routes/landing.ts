import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  console.log(req.session);
  res.send(`
    <h1>Testing..</h1>
    <p>This is a session-auth test</p>
  `);
});

export default router;
