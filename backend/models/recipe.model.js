const { string } = require('joi');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const RecipeSchema = new Schema({
  id: ObjectId,
  data: {
    recipe: {
      publisher: String,
      ingredients: [
        {
          quantity: Number,
          unit: String,
          description: String,
          _id: false,
        },
      ],
      source_url: String,
      image_url: String,
      title: String,
      servings: Number,
      cooking_time: Number,
    },
  },
  categoryName: { type: String },
  categoryID: {
    type: Schema.Types.ObjectId,
    ref: 'categories',
  },
});

const RecipeModel = mongoose.model('recipe', RecipeSchema);

module.exports = RecipeModel;
