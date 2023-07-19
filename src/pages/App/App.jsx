import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service'
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import CreateRecipe from '../CreateRecipes/CreateRecipes';
import MealPlan from '../MealPlan/MealPlan';
import NavBar from '../../components/NavBar/NavBar';
import UserRecipes from '../UserRecipes/UserRecipes';
import MealId from '../MealId/MealId';
import EditMeal from '../EditMeal/EditMeal'
import Home from '../Home/Home'

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser}/>
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<Home />} />
              <Route path="/recipes" element={<UserRecipes />} />
              <Route path="/recipes/new" element={<CreateRecipe />} />
              <Route path="/meal-plan" element={<MealPlan />} />
              <Route path="/recipes/:id" element={<MealId />} />
              <Route path="/recipes/:id/edit" element={<EditMeal />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
