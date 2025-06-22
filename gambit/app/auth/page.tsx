"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { login } from "@/app/actions/auth";
import "./styles.css";

const Auth: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [pending, setPending] = useState(false);
  const { status } = useSession();
  const router = useRouter();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPending(true);

    try {
      await login({ username, password }, setPending);
      router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An error occurred during login");
      setPending(false);
    }
  };

  return (
    <div className="auth-container">
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Auth;
