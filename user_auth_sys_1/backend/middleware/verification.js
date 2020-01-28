const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let resp = {};
  let token = req.header("auth-token");
  if (!token) {
    resp.status = "failed";
    resp.msg = "Token verification failed";
    return res.status(401).json(resp);
  }

  try {
    let userDetails = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = userDetails;
    next();
  } catch (err) {
    resp.status = "failed";
    // resp.msg = err;
    resp.msg = "Invalid User";
    res.status(400).json(resp);
  }
};
