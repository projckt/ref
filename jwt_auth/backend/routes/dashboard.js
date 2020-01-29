const router = require("express").Router();
const tokenVerification = require("../middleware/verification");

router.get("/", tokenVerification, (req, res) => {
  return res.json(req.user);
});

module.exports = router;
