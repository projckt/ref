import { RedisOptions } from "ioredis";

const { REDIS_PORT, REDIS_HOST, REDIS_PASSWORD } = process.env;

export const REDIS_OPTIONS: RedisOptions = {
  port: +REDIS_PORT,
  host: REDIS_HOST,
  password: REDIS_PASSWORD
};
