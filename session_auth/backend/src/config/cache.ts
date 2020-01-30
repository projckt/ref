import dotenv from "dotenv";
import { RedisOptions } from "ioredis";
dotenv.config();

export const REDIS_OPTIONS: RedisOptions = {
  host: process.env.REDIS_HOST,
  port: +process.env.REDIS_PORT
};
