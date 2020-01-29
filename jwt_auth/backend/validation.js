const Joi = require("@hapi/joi");

const registerValidation = data => {
  const schema = Joi.object({
    First_Name: Joi.string()
      .min(1)
      .required(),
    Last_Name: Joi.string()
      .min(1)
      .required(),
    Email: Joi.string()
      .min(5)
      .required()
      .email(),
    Password: Joi.string()
      .min(6)
      .required()
  });
  return schema.validate(data);
};

const loginValidation = data => {
  const schema = Joi.object({
    Email: Joi.string()
      .min(5)
      .required()
      .email(),
    Password: Joi.string()
      .min(6)
      .required()
  });
  return schema.validate(data);
};

module.exports.loginValidation = loginValidation;
module.exports.registerValidation = registerValidation;
