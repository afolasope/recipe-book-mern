const express = require('express');
const {
  getAllRecipes,
  getRecipesById,
  getRecipeByCategory,
  addRecipe,
} = require('../controller/recipes.controller');
const { verifyUserMW } = require('../middlewares/verifyUser');
const recipeRouter = express.Router();

recipeRouter.get('/', getAllRecipes);
recipeRouter.post('/', verifyUserMW, addRecipe);
recipeRouter.get('/:id', getRecipesById);
recipeRouter.get('/category/:id', getRecipeByCategory);

module.exports = recipeRouter;
