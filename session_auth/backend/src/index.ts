import express from "express";
const app = express();

app.get("/", (req, res) => {
  let resp: object = {
    status: "success",
    message: "YoYo"
  };
  res.json(resp);
});

app.listen(3666, () => {
  console.log(`Server is listening`);
});
