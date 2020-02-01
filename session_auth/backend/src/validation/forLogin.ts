import Joi from "@hapi/joi";

const loginValidation = data => {
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
  return schema.validate(data);
};

export default loginValidation;
