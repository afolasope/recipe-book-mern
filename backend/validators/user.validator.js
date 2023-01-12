const Joi = require('joi');

const userSchema = Joi.object({
  firstName: Joi.string().required().trim(),
  lastName: Joi.string().required().trim(),
  username: Joi.string().required().trim(),
  email: Joi.email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
});

const userValidatorMW = async (req, res, next) => {
  const userPayload = req.body;
  try {
    await userSchema.validateAsync(userPayload);
    next();
  } catch (error) {
    next({
      message: error.details[0].message,
      status: 400,
    });
  }
};

module.exports = { userValidatorMW };
