const express = require('express');
const { getAllCategories } = require('../controller/categories.controller');

const categoryRouter = express.Router();

categoryRouter.get('/', getAllCategories);

module.exports=categoryRouter