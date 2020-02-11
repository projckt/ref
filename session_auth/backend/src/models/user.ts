import { model, Schema, Document } from "mongoose";
import * as argon from "argon2";

interface UserDocument extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordMatch: (password: string) => Promise<boolean>;
}

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      unique: true,
      min: 1,
      max: 128
    },
    lastName: {
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

userSchema.methods.passwordMatch = async function(password: string) {
  return await argon.verify(this.password, password);
};

export const User = model<UserDocument>("User", userSchema);
