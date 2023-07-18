import { useState } from 'react';
import CreateRecipes from "../CreateRecipes/CreateRecipes";
import MyRecipesList from '../MyRecipesList/MyRecipes';

export default function UserRecipes() {

  
  const [createRecipeVisible, setCreateRecipeVisible] = useState(false);
  // const [recipeListVisible, setRecipeListVisible] = useState(true)

  function toggleCreateRecipe() {
    setCreateRecipeVisible(!createRecipeVisible);
    // setRecipeListVisible(recipeListVisible)
  }



  return (
    <>

      <h2 className="recipe-create" onClick={toggleCreateRecipe}>
        {createRecipeVisible ? 'Show my recipes' : 'Add a recipe'}
      </h2>
      {createRecipeVisible ? (
        <CreateRecipes />
        ) : (
          <MyRecipesList />
        )}
    </>
  );
}