const express = require('express');
const {
  getAllRecipes,
  getRecipesById,
  getRecipeByCategory,
  addRecipe,
} = require('../controller/recipes.controller');
const recipeRouter = express.Router();

recipeRouter.get('/', getAllRecipes);
recipeRouter.post('/', addRecipe);
recipeRouter.get('/:id', getRecipesById);
recipeRouter.get('/category/:id', getRecipeByCategory);

module.exports = recipeRouter;
