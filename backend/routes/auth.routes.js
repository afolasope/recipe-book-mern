const express = require('express');
const { signup } = require('../controller/auth.controller');
const { userValidatorMW } = require('../validators/user.validator');
const authRouter = express.Router();

authRouter.post('/', userValidatorMW, signup);

module.exports = authRouter;