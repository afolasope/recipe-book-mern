const fetch = require('node-fetch-commonjs');
const CategoryModel = require('../models/category.model');
const RecipeModel = require('../models/recipe.model');

const IDs = [
  '5ed6604591c37cdc054bcac0',
  '5ed6604591c37cdc054bcad3',
  '5ed6604591c37cdc054bcd21',
  '5ed6604591c37cdc054bce3b',
  '5ed6604591c37cdc054bcdbc',
  '5ed6604591c37cdc054bcb9f',
  '5ed6604591c37cdc054bcab7',
  '5ed6604591c37cdc054bcb54',
  '5ed6604591c37cdc054bcac7',
  '5ed6604591c37cdc054bc8d5',
  '5ed6604691c37cdc054bd02b',
  '5ed6604591c37cdc054bce09',
  '5ed6604591c37cdc054bcda5',
  '5ed6604591c37cdc054bcd62',
  '5ed6604591c37cdc054bcc7a',
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
  const findFood = await CategoryModel.findOne({ name: 'mushroom' });

  const res = await fetchRecipe();
  const recipes = res.map(
    ({
      data: {
        recipe: {
          publisher,
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
        data: {
          recipe: {
            publisher,
            ingredients,
            source_url,
            image_url,
            title,
            servings,
            cooking_time,
            recipeID: id,
          },
        },
        categoryID: findFood._id,
      };
    }
  );
  console.log(recipes);

  await RecipeModel.insertMany(recipes);
};
