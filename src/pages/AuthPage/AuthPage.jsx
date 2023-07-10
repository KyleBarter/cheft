import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";

export default function AuthPage({ setUser }) {
  return (
    <main>

      <h1 id="brand">Cheft</h1>
      <div class="forms">
        <LoginForm setUser={setUser}/>
        <SignUpForm setUser={setUser}/>
      </div>
    </main>
  );
}