const express = require('express');
const { getAllRecipes } = require('../controller/recipes.controller');
const recipeRouter = express.Router();

recipeRouter.get('/', getAllRecipes)

module.exports=recipeRouter