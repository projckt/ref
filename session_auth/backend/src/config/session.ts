import { SessionOptions } from "express-session";
import dotenv from "dotenv";
dotenv.config();

const IS_PROD = process.env.APP_ENV === "production";

export const SESSION_OPTIONS: SessionOptions = {
  secret: process.env.SESSION_SECRET!,
  name: process.env.SESSION_NAME,
  cookie: {
    maxAge: +process.env.SESSION_IDLE_TIMEOUT!,
    secure: IS_PROD,
    sameSite: true
  },
  resave: false,
  saveUninitialized: false
};
