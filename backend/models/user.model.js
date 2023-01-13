const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});


UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    
    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash;
    next();
});


const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;
