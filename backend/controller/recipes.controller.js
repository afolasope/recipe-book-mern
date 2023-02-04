const CategoryModel = require('../models/category.model');
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

exports.addRecipe = async (req, res) => {
  const {
    data: {
      recipe: { publisher },
      ingredients,
      source_url,
      image_url,
      title,
      servings,
      cooking_time,
    },
    categoryName,
  } = req.body;
  const findCategoryID = await CategoryModel.find({ categoryName });
  const newRecipe = await RecipeModel.create({
    data: {
      recipe: {
        publisher,
        ingredients,
        source_url,
        image_url,
        title,
        servings,
        cooking_time,
      },
    },
    categoryName,
    categoryID: findCategoryID._id,
  });
  if (!newRecipe) {
    return res.status(400).send({
      message: 'recipe creation failed',
    });
  }
  res.status(200).send({ message: 'talk to the hand' });
};
