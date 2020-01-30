import { RedisOptions } from "ioredis";
import dotenv from "dotenv";
dotenv.config();

export const REDIS_OPTIONS: RedisOptions = {
  host: process.env.REDIS_HOST,
  port: +process.env.REDIS_PORT
};
