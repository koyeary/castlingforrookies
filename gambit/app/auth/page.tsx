"use client";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

const Auth: React.FC = () => {
  const router = useRouter();

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Here you would typically handle the login logic, e.g., API call
    // For now, we'll just redirect to the dashboard
    router.push("/dashboard");
  }

  return (
    <form onSubmit={handleLogin}>
      Login
      <button type="submit">Login</button>
    </form>
  );
};

export default Auth;
