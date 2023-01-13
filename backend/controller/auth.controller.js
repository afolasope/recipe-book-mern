const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');

exports.signup = async (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;

  const checkEmail = await UserModel.findOne({ email });
  const checkUsername = await UserModel.findOne({ username });

  if (checkEmail) {
    return res.status(400).json({
      message: 'email is already in use',
    });
  }
  if (checkUsername) {
    return res.status(400).json({
      message: 'username is already in use',
    });
  }

  const user = await UserModel.create({
    firstName,
    lastName,
    email,
    username,
    password,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return res.status(200).json({ user, token });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      message: 'Please enter a valid email and password',
    });
  }
  const user = await UserModel.findOne({ email: email }).select('+password');
  console.log(user);

  res.status(200).json({
    message: 'success',
  });
};
