import dotenv from "dotenv";
dotenv.config();

export const APP_OPTIONS = {
  env: process.env.APP_ENV,
  port: process.env.APP_PORT
};
