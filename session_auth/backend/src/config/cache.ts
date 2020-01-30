import { RedisOptions } from "ioredis";

const {
  REDIS_PORT = 10,
  REDIS_HOST = "localhost",
  REDIS_PASSWORD = "secret"
} = process.env;

export const REDIS_OPTIONS: RedisOptions = {
  port: +REDIS_PORT,
  host: REDIS_HOST,
  password: REDIS_PASSWORD
};
