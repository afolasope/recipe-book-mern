const CategoryModel = require('../models/category.model');

// const categories = ['pizza', 'potato', 'banana', 'mushroom', 'carrot'];

exports.getAllCategories = async(req, res) => {
    const categories = await CategoryModel.find({})
    res.send({
        message: 'all available categories',
        categories
    })
};

