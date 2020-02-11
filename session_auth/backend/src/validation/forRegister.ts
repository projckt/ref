import Joi from "@hapi/joi";
import { Request } from "express";

const registerValidation = (reqBody: Request) => {
  const schema = Joi.object({
    firstName: Joi.string()
      .min(1)
      .max(128)
      .trim()
      .required(),
    lastName: Joi.string()
      .min(1)
      .max(128)
      .trim()
      .required(),
    email: Joi.string()
      .email()
      .min(5)
      .max(128)
      .lowercase()
      .trim()
      .required(),
    password: Joi.string()
      .min(8)
      .max(256)
      .required(),
    passwordConfirmation: Joi.valid(Joi.ref("password")).required()
  });
  return schema.validate(reqBody);
};

export default registerValidation;
