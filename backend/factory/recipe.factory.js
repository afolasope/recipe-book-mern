const fetch = require('node-fetch-commonjs');
const CategoryModel = require('../models/categories.model');
const RecipeModel = require('../models/recipe.model');

const IDs = [
  // '5ed6604591c37cdc054bca65',
];

const fetchRecipe = async () => {
  const data = IDs.map(async (item) => {
    const data = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${item}`
    );
    const response = await data.json();
    return response;
  });
  const res = await Promise.all(data);
  return res;
};

exports.createRecipe = async () => {
  const findFood = await CategoryModel.findOne({ name: 'carrot' })
  console.log(findFood);

  const res = await fetchRecipe();
  const recipes = res.map(
    ({
      status,
      data: {
        recipe: { publisher,
          ingredients,
          source_url,
          image_url,
          title,
          servings,
          cooking_time,
          id,
        },
      },
    }) => {
      return {
        status,
        data: {
          recipe: {
            publisher,
            ingredients,
            source_url,
            image_url,
            title,
            servings,
            cooking_time,
            recipeID:id
          },
        },
        foodID:findFood._id
      };
    }
  );
  console.log(recipes);

    // await RecipeModel.insertMany(recipes);
};
