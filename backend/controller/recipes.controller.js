const RecipeModel = require('../models/recipe.model');

exports.getAllRecipes = async (req, res) => {
  const recipes = await RecipeModel.find({});
  res.send(recipes);
};

exports.getRecipesById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const recipes = await RecipeModel.findOne({ _id: id });
  res.send(recipes);
};

exports.getRecipeByCategory = async (req, res) => {
  const { id } = req.params;
  const category = await RecipeModel.find({ categoryID: id });
  res.send(category);
};
