const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const RecipeSchema = new Schema({
  id: ObjectId,
  status: String,
  data: {
    recipe: {
      publisher: String,
      ingredients: [
        {
          quantity: Number,
          unit: String,
          description: String,
        },
      ],
      source_url: String,
      image_url: String,
      title: String,
      servings: Number,
      cooking_time: Number,
      recipeID: String,
    },
  },
  foodID: {
    type: Schema.Types.ObjectId,
    ref: 'recipes',
  },
});

const RecipeModel = mongoose.model('recipe', RecipeSchema);

module.exports = RecipeModel;
