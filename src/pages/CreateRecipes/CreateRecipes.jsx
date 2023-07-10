import { checkToken } from '../../utilities/users-service';

export default function CreateRecipes() {
  async function handleCheckToken(){
    const expDate = await checkToken();
    console.log(expDate)
  }
  
  return (
    <>
      <h1>CreateRecipes</h1>
      <button onClick={handleCheckToken}>Check when my login expires</button>
    </>

  );
}