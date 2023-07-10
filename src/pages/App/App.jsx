import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service'
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import MyRecipes from '../MyRecipes/MyRecipes';
import CreateRecipe from '../CreateRecipes/CreateRecipes';
import MealPlan from '../MealPlan/MealPlan';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser}/>
            <Routes>
              {/* Route components in here */}
              <Route path="/recipes" element={<MyRecipes />} />
              <Route path="/recipes/new" element={<CreateRecipe />} />
              <Route path="/meal-plan" element={<MealPlan />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
