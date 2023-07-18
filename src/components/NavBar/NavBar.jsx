import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {
  function handleLogOut(){
    userService.logOut();
    setUser(null)
  }
  return (
    <nav>
      <h1>Cheft</h1>
      <div id="nav-links">
        <Link to="/">Home</Link>
        <Link to="/recipes">My recipes</Link>
        <Link to="/meal-plan">Meal plan</Link>
        <Link to="" onClick={handleLogOut}>Log Out</Link>
      </div>
    </nav>
  );
}