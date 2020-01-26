const express = require("express");
const app = express();
const auth = require("./routes/auth");
const mongoose = require("mongoose");
const PORT = 5000;

mongoose.connect(
  "mongodb://localhost/test",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log(`connected to database`);
  }
);

app.get("/", (req, res) => {
  res.send("lel");
});

app.use("/user", auth);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
