import { ConnectionOptions } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const { MONGO_HOST, MONGO_DATABASE } = process.env;
export const MONGO_URI = `mongodb://${MONGO_HOST}/${MONGO_DATABASE}`;
export const MONGO_OPTIONS: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
