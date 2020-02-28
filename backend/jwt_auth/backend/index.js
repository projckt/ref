const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const PORT = 5000;

const auth = require("./routes/auth");
const dashboard = require("./routes/dashboard");

dotenv.config();
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log(`connected to database`);
  }
);

app.use(express.json());
app.use(cors());
app.use("/user", auth);
app.use("/dashboard", dashboard);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// app.get("/", (req, res) => {
//   res.send("lel");
// });
