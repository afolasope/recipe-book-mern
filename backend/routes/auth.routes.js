const express = require('express');
const { signup, login } = require('../controller/auth.controller');
const { userValidatorMW, userLoginValidatorMW } = require('../validators/user.validator');
const authRouter = express.Router();

authRouter.post('/signup', userValidatorMW, signup);
authRouter.post('/login', userLoginValidatorMW, login);

module.exports = authRouter;
