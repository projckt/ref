const express = require("express");
const app = express();
const auth = require("./routes/auth");
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("lel");
});

app.use("/user", auth);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
