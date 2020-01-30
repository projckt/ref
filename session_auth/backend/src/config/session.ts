import { SessionOptions } from "express-session";
import dotenv from "dotenv";
dotenv.config();

export const SESSION_OPTIONS: SessionOptions = {
  secret: process.env.SESSION_SECRET,
  name: process.env.SESSION_NAME,
  cookie: {
    maxAge: +process.env.SESSION_IDLE_TIMEOUT,
    //secure: true,
    sameSite: true
  },
  rolling: true,
  resave: false,
  saveUninitialized: false
};
