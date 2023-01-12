const UserModel = require('../models/user.model');

exports.signup = async (req, res) => {
  const userCredentials = req.body;

  const user = await UserModel.create(userCredentials);
  res.status(200).json(user);
};
