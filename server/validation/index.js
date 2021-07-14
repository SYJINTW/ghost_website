const Joi = require("joi");

const registerValidation = data => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(6).max(50).required().email(),
    password: Joi.string().min(6).max(255).required(),
  });

  return schema.validate(data);
};

const loginValidation = data => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(50).required().email(),
    password: Joi.string().min(6).max(255).required(),
  });
  return schema.validate(data);
};

const wishingValidation = data => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email(),
    title: Joi.string().required(),
    ISBN: Joi.string().required(),
  });
  return schema.validate(data);
};

const itemValidation = data => {
  const schema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
    content: Joi.string().required(),
    type: Joi.string().required().valid("Book", "Food"),
    city: Joi.string().required(),
    church: Joi.string().required(),
  });
  return schema.validate(data);
};

const feedbackValidation = data => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email(),
    subject: Joi.string().required(),
    message: Joi.string().required(),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.wishingValidation = wishingValidation;
module.exports.itemValidation = itemValidation;
module.exports.feedbackValidation = feedbackValidation;
