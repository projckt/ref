import express from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import { APP_OPTIONS, REDIS_OPTIONS } from "./config";

const RedisStore = connectRedis(session);
const app = express();
const client = new Redis(REDIS_OPTIONS);

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(APP_OPTIONS.port, () => {
  console.log(`Server is listening on PORT: ${APP_OPTIONS.port}`);
});
