import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import * as recipeAPI from '../../utilities/recipes-api'


export default function MyRecipesList(){
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        async function getAllRecipe(){
            try {
                const data = await recipeAPI.getAllRecipes()
                setRecipes(data)
            } catch (err) {
                console.log('Get all recipe err: ', err)
            }
        }
        getAllRecipe()
    }, [])

    return (
        <div className='home-recipes'>
          <ul>
            {recipes.map((recipe) => (
                <li key={recipe._id} className='home-recipe-item'>
                    <Link key={recipe._id} to={`/recipes/${recipe._id}`} className='custom-link'>
                        <div className='user-recipes'>
                            {recipe.name}   
                            <br></br>
                            <span className='prep-time'>{recipe.prepTime} minutes</span>
                        </div>
                    </Link>
                </li> 
            ))}
          </ul>
        </div>
    );
};


