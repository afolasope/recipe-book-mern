const express = require('express');

const app = express();
require('dotenv').config()

const PORT = process.env.PORT;
require('./db').connectToMongoDB();

// const { createCategories } = require('./factory/categories.factory');
// const { createRecipe } = require('./factory/recipe.factory');
// createCategories();
// createRecipe()

const categoryRouter = require('./routes/categories.route');
const recipeRouter = require('./routes/recipes.controller');


app.get('/', (req, res) => {
  res.send('Welcome to the recipee book ');
});
app.use('/categories', categoryRouter)
app.use('/recipes', recipeRouter)

app.listen(PORT, () => {
  console.log(`server is listening on PORT:${PORT}`);
});
