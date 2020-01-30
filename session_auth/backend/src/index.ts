import express from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import { REDIS_OPTIONS } from "./config";

const { ENV, PORT, REDIS_HOST, REDIS_PORT } = process.env;
const RedisStore = connectRedis(session);
const app = express();
const client = new Redis(REDIS_OPTIONS);

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(PORT, () => {
  console.log(`Server is listening`);
});
