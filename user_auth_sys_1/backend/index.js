const express = require("express");
const app = express();
const auth = require("./routes/auth");

app.get("/", (req, res) => {
  res.send("lel");
});

app.use("/api/user", auth);

app.listen(3000, () => console.log(`Server is running on port 3000`));
