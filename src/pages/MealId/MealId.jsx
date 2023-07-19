import { useEffect, useState} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import * as recipeAPI from '../../utilities/recipes-api'


export default function MealId(){
    const { id } = useParams()
    const [mealDetails, setMealDetails] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        async function fetchRecipe() {
          try {
            const data = await recipeAPI.getSingleRecipe(id)
            setMealDetails(data); 
          } catch (error) {
            console.log('Error fetching meal details:', error);
          }
        }
    
        fetchRecipe();
    }, [id]);
    
    const handleDelete = async () => {
      try {
        await recipeAPI.deleteRecipe(id)
        navigate('/recipes')
      } catch (error) {
        console.log('Handle delete: ', error)
      }

    }

    return(
        <div className="meal-id-container">
            {mealDetails && 
            <>
                <h1>{mealDetails.name}</h1>
                <h3>{mealDetails.prepTime}mins</h3>
                {mealDetails.ingredients.map(ingredient => (
                  <h3>{ingredient}</h3>
                ))}
                <h3>{mealDetails.instructions}</h3>

                <button>
                  <Link key={mealDetails._id} to={`/recipes/${mealDetails._id}/edit`}>Edit</Link>
                </button>
                <button onClick={handleDelete}>Delete</button>
            </>
            }
        </div>
    )
}