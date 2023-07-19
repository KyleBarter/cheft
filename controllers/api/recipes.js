const Recipe = require('../../models/recipe')
const User = require("../../models/user")

module.exports = {
    create,
    update,
    index,
    edit,
    show,
    deleteRecipe,
    saved,
}

//? Create recipe
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

//? Show all recipes
async function index(req, res, next) {
    try {
        const recipes = await Recipe.find({})
        return res.json(recipes)
    } catch (err) {
        res.json(err)
        console.log('index', err)
    }
}

//? Save recipe
async function saved(req, res, next){
    try {
        const recipe = await Recipe.findById(req.body.recipeId)
        const user = await User.findById(req.body.userId)
        user.savedRecipes.push(recipe)
        await user.save()
        res.json({ savedRecipes: user.savedRecipes})
    } catch (err) {
        res.json(err)
    }
}

//? Update recipe
async function update(req, res, next){
    try {
        // const recipe = await Recipe.findById(req.body.recipeId)
        // const user = await User.findById(req.body.userId)
        // user.savedRecipes.push(recipe)
        // await user.save();
        // return res.json({savedRecipes: user.savedRecipes})
        const { id } = req.params
        const recipeDocument = await Recipe.findById(id)
        Object.assign(recipeDocument, req.body)
        await recipeDocument.save()
        return res.json(recipeDocument)
    } catch (err) {
        res.json(err)
    }
}

//? Show individual recipe
async function show(req, res, next){
    console.log('show')
    try {
        const { id } = req.params
        const recipe = await Recipe.findById(id)
        console.log(recipe, 'recipe hit')
        return res.json(recipe)
    } catch (err) {
        console.log(err, 'show error')
    }
}

//? Edit page
async function edit(req, res, next){
    console.log('edit')
    try {
        const { id } = req.params
        const recipe = await Recipe.findById(id)
        return res.json(recipe)
    } catch (err) {
        console.log('edit err: ', err)
    }
}

async function deleteRecipe(req, res, next){
    try {
        const { id } = req.params
        const recipe = await Recipe.findByIdAndRemove(id)
        return res.json(recipe)
    } catch (err) {
        console.log('Delete err: ', err)
    }
}