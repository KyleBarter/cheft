const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    ingredients: [{
        type: String,
        required: true,
    }],
    prepTime: {
        type: Number
    },
    instructions: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

// const mealPrepSchema = Schema({
//     day: {
//         type: String,
//         enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
//     }, 
//     recipes: [recipeSchema]
// })

module.exports = mongoose.model('Recipe', recipeSchema)