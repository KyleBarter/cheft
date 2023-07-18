import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import * as recipeAPI from '../../utilities/recipes-api'


export default function MealId(){
    const { id } = useParams()
    const [mealDetails, setMealDetails] = useState(null)

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
    
    return(
        <div className="meal-id-container">
            {mealDetails && 
            <>
                <h1>{mealDetails.name}</h1>
                <h3>{mealDetails.prepTime}mins</h3>
                <h3>{mealDetails.ingredients}</h3>
                <h3>{mealDetails.instructions}</h3>
            </>
            }
        </div>
    )
}