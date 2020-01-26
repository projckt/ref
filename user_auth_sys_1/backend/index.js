const express = require("express");
const app = express();
const auth = require("./routes/auth");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PORT = 5000;

dotenv.config();
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log(`connected to database`);
  }
);

app.use(express.json());
app.use("/user", auth);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// app.get("/", (req, res) => {
//   res.send("lel");
// });
