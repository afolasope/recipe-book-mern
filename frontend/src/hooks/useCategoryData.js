import axios from 'axios';
import { useQuery } from 'react-query';

const fetchCategories = async () => {
  return axios.get(`http://localhost:8000/categories`);
};

const useCategoryData = () => {
  return useQuery('catgories', fetchCategories, {
    select: (data) => {
      const info = data.data.categories.map(({ name, image, _id: id }) => {
        return { name, image, id };
      });
      return info;
    },
  });
};
export { useCategoryData };
