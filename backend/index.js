const express = require('express');
const cors = require('cors');

const app = express();
require('dotenv').config();
app.use(express.json());

const PORT = process.env.PORT;
require('./db').connectToMongoDB();

// const { createCategories } = require('./factory/categories.factory');
// createCategories();
const { createRecipe } = require('./factory/recipe.factory');
// createRecipe()

const categoryRouter = require('./routes/categories.route');
const recipeRouter = require('./routes/recipes.route');
const authRouter = require('./routes/auth.routes');

app.use(
  cors({
    origin: '*',
  })
);

app.get('/', (req, res) => {
  res.send('Welcome to the recipee book ');
});
app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/recipes', recipeRouter);
app.use('/api/v1/auth', authRouter);

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`server is listening on PORT:${PORT}`);
});
