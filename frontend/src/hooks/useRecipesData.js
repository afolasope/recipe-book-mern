import axios from 'axios';
const { useQuery } = require('react-query');

const fetchRecipes = (categoryID) => {
  return axios.get(`http://localhost:8000/recipes/category/${categoryID}`);
};

const useRecipesData = (categoryID = '638f7e7c929d5ef3f04e439f') => {
  return useQuery(['recipes', categoryID], () => fetchRecipes(categoryID), {
    select: (data) => {
      const info = data.data.map(
        ({
          _id: id,
          data: {
            recipe: {
              cooking_time,
              image_url,
              publisher,
              servings,
              source_url,
              title,
              ingredients,
            },
          },
        }) => {
          return {
            id,
            cooking_time,
            image_url,
            publisher,
            servings,
            source_url,
            title,
            ingredients,
          };
        }
      );
      return info;
    },
    // enabled: !!categoryID,
  });
};

export { useRecipesData };
