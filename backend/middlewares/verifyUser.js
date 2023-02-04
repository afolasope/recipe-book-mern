const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');

exports.verifyUserMW = async (req, res, next) => {
  const bearerToken = req.headers.authorization.split(' ');

  if (!bearerToken) {
    return res.status(400).send({ message: 'User is not authenticated' });
  }

  const token = bearerToken[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log(decoded);
  if (!decoded) {
    return res.status(400).send({
      message: 'user is nor authenticated',
    });
  }
  const user = UserModel.findById(decoded.id);
  if (!user) {
    return res.status(400).send({
      message: 'user not found',
    });
  }

  return next();
};
