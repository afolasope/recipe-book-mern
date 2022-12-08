const CategoryModel = require('../models/category.model');

const categoriesArr = [
  {
    name: 'pizza',
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80',
  },
  {
    name: 'potato',
    image:
      'https://images.unsplash.com/photo-1552845683-cfefc701e423?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    name: 'banana',
    image:
      'https://images.unsplash.com/photo-1526364163643-89e30b8fcb70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
  {
    name: 'mushroom',
    image:
      'https://images.unsplash.com/photo-1550431221-6f1495d56cf3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1712&q=80',
  },
  {
    name: 'carrot',
    image:
      'https://plus.unsplash.com/premium_photo-1663840344832-2b69b167acd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
];

exports.createCategories = async () => {
  const categories = categoriesArr.map(({ name, image }) => {
    return { image, name };
  });

  // await CategoryModel.insertMany(categories);
};
