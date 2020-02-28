import Joi from "@hapi/joi";

const loginValidation = (reqBody: Request) => {
  const schema = Joi.object({
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
      .required()
  });
  return schema.validate(reqBody);
};

export default loginValidation;
