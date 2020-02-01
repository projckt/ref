import express from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import mongoose from "mongoose";
import { register, landing } from "./routes";
import {
  APP_OPTIONS,
  REDIS_OPTIONS,
  SESSION_OPTIONS,
  MONGO_URI,
  MONGO_OPTIONS
} from "./config";

(async () => {
  await mongoose.connect(MONGO_URI, MONGO_OPTIONS, () => {
    console.log("Connected to Mongo!");
  });
  const RedisStore = connectRedis(session);
  const app = express();
  const client = new Redis(REDIS_OPTIONS);

  app.use(express.json());
  app.use(
    session({
      ...SESSION_OPTIONS,
      store: new RedisStore({ client })
    })
  );
  app.use(register);
  app.use(landing);
  app.listen(APP_OPTIONS.port, () => {
    console.log(`Server is listening on PORT: ${APP_OPTIONS.port}`);
  });
})();
