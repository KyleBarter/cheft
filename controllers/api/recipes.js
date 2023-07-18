const Recipe = require('../../models/recipe')
const User = require("../../models/user")

module.exports = {
    create,
    update,
    index,
    edit,
    show,
    deleteRecipe,
}

async function create(req, res, next) {
    try {
        req.body.user = req.user
        const recipe = new Recipe(req.body)
        const response = await recipe.save()
        console.log('create hit', response)
        return res.json(response)
    } catch (err) {
        res.json(err)
        console.log('create', err)
    }
}

async function index(req, res, next) {
    try {
        const recipes = await Recipe.find({})
        return res.json(recipes)
    } catch (err) {
        res.json(err)
        console.log('index', err)
    }
}

async function update(req, res, next){
    try {
        const recipe = await Recipe.findById(req.body.recipeId)
        const user = await User.findById(req.body.userId)
        user.savedRecipes.push(recipe)
        await user.save();
        return res.json({savedRecipes: user.savedRecipes})
    } catch (err) {
        res.json(err)
    }
}

async function show(req, res, next){
    console.log('show')
    try {
        const { id } = req.params
        const recipe = await Recipe.findById(id)
        console.log(recipe, 'recipe hit')
        return res.json(recipe)
    } catch (err) {
        console.log(err, 'show error')
        next()
    }
}

async function edit(req, res, next){

}

async function deleteRecipe(req, res, next){

}