import { useState } from 'react'
import * as recipeAPI from '../../utilities/recipes-api'
import { useNavigate } from 'react-router-dom'

export default function CreateRecipes() {
  // async function handleCheckToken(){
  //   const expDate = await checkToken();
  //   console.log(expDate)
  // }
  const navigate = useNavigate()

  const initialState = {
    name: '',
    ingredients: [],
    instructions: '',
    prepTime: '',
  }

  const [recipes, setRecipe] = useState(initialState)

  function addIngredient() {
    setRecipe({ ...recipes, ingredients: [...recipes.ingredients, ""]})
  }
  function handleIngredientChange (evt, idx) {
    const { value } = evt.target;
    const ingredients = recipes.ingredients;
    ingredients[idx] = value
    setRecipe({ ...recipes, ingredients})
  }
  function handleChange (evt) {
    const { name, value } = evt.target;
    setRecipe({ ...recipes, [name]: value})
  }

  async function handleSubmit(evt){
    evt.preventDefault()
    try {
      const res = await recipeAPI.addRecipe(recipes)
      console.log(res._id)
      navigate(`/recipes/${res._id}`)

    } catch (err) {
      console.log('handle submit err:', err)
    }
  }


  return (
    <div className='create-parent'>
      <form className="create-recipe" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder='Recipe name' 
            id="name-create"
            value={recipes.name}
            onChange={handleChange}
          />
            <div className="text-boxes">
              {recipes.ingredients.map((ingredient, idx) => (
              <input 
                key={idx}
                type="text" 
                name="ingredients" 
                placeholder='Ingredients' 
                id="ingredients-create"
                value={ingredient}
                onChange={(evt) => handleIngredientChange(evt, idx)}
              />
              ))}
              <button onClick={addIngredient} type="button">add ingredient</button>
              <input 
                type="text" 
                name="instructions" 
                placeholder='Instructions' 
                id="instructions-create"
                value={recipes.instructions}
                onChange={handleChange}
              />
            </div>
          <input 
            type="number" 
            name="prepTime" 
            placeholder='Time (mins)' 
            id="time-create"
            value={recipes.prepTime}
            onChange={handleChange}
          />
          <button type="submit">Create recipe</button>
      </form>
      {/* <button onClick={handleCheckToken}>Check when my login expires</button> */}
    </div>

  );
}