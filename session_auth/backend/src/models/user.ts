import { model, Schema, Document } from "mongoose";

interface UserDocument extends Document {
  fname: string;
  lname: string;
  email: string;
  password: string;
}

const userSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
      unique: true,
      min: 1,
      max: 128
    },
    lname: {
      type: String,
      required: true,
      unique: true,
      min: 1,
      max: 128
    },
    email: {
      type: String,
      required: true,
      unique: true,
      min: 5,
      max: 128
    },
    password: {
      type: String,
      required: true,
      unique: true,
      min: 8,
      max: 256
    }
  },
  {
    timestamps: true
  }
);

export const User = model<UserDocument>("User", userSchema);
