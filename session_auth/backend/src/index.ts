import express from "express";
const app = express();

const { ENV, PORT, OLO, GELLO } = process.env;

app.get("/", (req, res) => {
  let resp: object = {
    status: "success",
    message: "YoYo"
  };
  res.json(resp);
  console.log(` ENV: ${ENV}`);
  console.log(` PORT: ${PORT}`);
  console.log(` OLO: ${OLO}`);
  console.log(` GELLO: ${GELLO}`);
});

app.listen(PORT, () => {
  console.log(`Server is listening`);
});
