import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import * as recipeAPI from '../../utilities/recipes-api'


export default function EditMeal(){

    const initialState = {
        name: '',
        ingredients: [],
        instructions: '',
        prepTime: '',
      }

    const navigate = useNavigate()
    const { id } = useParams()
    const [recipe, setRecipe] = useState(initialState)


    useEffect(() => {
        async function fetchRecipe() {
          try {
            const data = await recipeAPI.getSingleRecipe(id)
            setRecipe(data); 
          } catch (error) {
            console.log('Error fetching meal details:', error);
          }
        }
    
        fetchRecipe();
    }, [id]);

    function addIngredient() {
        setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""]})
    }
    function handleIngredientChange (evt, idx) {
        const { value } = evt.target;
        const updatedIngredients = [...recipe.ingredients];
        updatedIngredients[idx] = value
        setRecipe({ ...recipe, ingredients: updatedIngredients})
    }
    function handleChange (evt) {
        const { name, value } = evt.target;
        setRecipe({ ...recipe, [name]: value})
    }

    async function handleSubmit(evt){
        evt.preventDefault()
        try {
          const res = await recipeAPI.editRecipe(id, recipe)
          console.log(res._id)
          navigate(`/recipes/${res._id}`)
        } catch (err) {
          console.log('handle submit err:', err)
        }
      }

    return(
        <div className='edit-parent'>
            <form className="edit-recipe" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder='Recipe name' 
                    id="name-create"
                    value={recipe.name}
                    onChange={handleChange}
                />
                    <div className="text-boxes">
                    {recipe.ingredients.map((ingredient, idx) => (
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
                        value={recipe.instructions}
                        onChange={handleChange}
                    />
                    </div>
                <input 
                    type="number" 
                    name="prepTime" 
                    placeholder='Time (mins)' 
                    id="time-create"
                    value={recipe.prepTime}
                    onChange={handleChange}
                />
                <button type="submit">Update recipe</button>
            </form>
        </div>
    )
}