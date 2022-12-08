const RecipeModel = require("../models/recipe.model");

exports.getAllRecipes = async(req,res)=>{
    const recipes = await RecipeModel.find({})
    res.send(recipes)   
}