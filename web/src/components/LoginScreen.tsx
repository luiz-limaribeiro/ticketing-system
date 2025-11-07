import type { FormEvent } from "react";
import "./styles/LoginScreen.css";

export default function LoginScreen() {
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
