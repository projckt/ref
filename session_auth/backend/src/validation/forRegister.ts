import Joi from "@hapi/joi";

const registerValidation = data => {
  const schema = Joi.object({
    fname: Joi.string()
      .min(1)
      .max(128)
      .trim()
      .required(),
    lname: Joi.string()
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
  return schema.validate(data);
};

export default registerValidation;
