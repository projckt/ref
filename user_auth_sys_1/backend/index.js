const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/local", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected..!"))
  .catch(err => console.log(err));

app.use("/", require("./routes/index"));
app.listen(PORT, console.log(`Server started on PORT: ${PORT}`));
