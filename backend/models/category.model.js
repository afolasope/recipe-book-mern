const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CategorySchema = new Schema({
  id: ObjectId,
  name: String,
  image: String,
});

const CategoryModel = mongoose.model('category', CategorySchema);

module.exports = CategoryModel;
