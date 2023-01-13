const Joi = require('joi');

const userSchema = Joi.object({
  firstName: Joi.string().required().trim(),
  lastName: Joi.string().required().trim(),
  username: Joi.string().required().trim(),
  email: Joi.string().email(),
  password: Joi.string().required(),
});

const userLoginSchema = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().required(),
});



const userValidatorMW = async (req, res, next) => {
  const userPayload = req.body;
  try {
    await userSchema.validateAsync(userPayload);
    next();
  } catch (error) {
    next({
      status: 400,
      message: error.details[0].message,
    });
  }
};

const userLoginValidatorMW = async (req, res, next) => {
  const userPayload = req.body;
  try {
    await userLoginSchema.validateAsync(userPayload);
    next();
  } catch (error) {
    next({
      status: 400,
      message: error.details[0].message,
    });
  }
};

module.exports = { userValidatorMW , userLoginValidatorMW};
