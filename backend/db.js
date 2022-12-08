const mongoose = require('mongoose');
require('dotenv').config()

MONGODB_CONNECTION_URL = process.env.MONGODB_CONNECTION_URL

function connectToMongoDB() {
  mongoose.connect(MONGODB_CONNECTION_URL);

  mongoose.connection.on('connected', () => {
    console.log('connection successful');
  });
  mongoose.connection.on('error', (error) => {
    console.log('error connecting');
  });
}

module.exports = { connectToMongoDB };
