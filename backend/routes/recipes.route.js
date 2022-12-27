const express = require('express');
const {
  getAllRecipes,
  getRecipesById,
  getRecipeByCategory,
} = require('../controller/recipes.controller');
const recipeRouter = express.Router();

recipeRouter.get('/', getAllRecipes);
recipeRouter.get('/:id', getRecipesById);
recipeRouter.get('/category/:id', getRecipeByCategory);

module.exports = recipeRouter;
