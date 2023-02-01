const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const checkEmail = await UserModel.findOne({ email });

  console.log(req.headers);

  if (checkEmail) {
    return res.status(400).json({
      message: 'email is already in use',
    });
  }

  const user = await UserModel.create({
    firstName,
    lastName,
    email,
    password,
  });

  const token = signToken(user._id);
  return res.status(200).json(token);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      message: 'Please enter a valid email and password',
    });
  }
  const user = await UserModel.findOne({ email: email }).select('+password');
  const validPassword = await user.isValidPassword(password, user.password);

  if (!user || !validPassword) {
    return res.status(401).json({
      message: 'Email or password is incorrect',
    });
  }

  const token = signToken(user._id);

  return res.status(200).json({
    message: 'success',
    token,
  });
};
