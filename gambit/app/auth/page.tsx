"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { TextField } from "@mui/material";
import "./styles.css";

const Auth: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;
  const [errorMessage, setErrorMessage] = useState("");
  const [pending, setPending] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("Form data updated:", formData);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPending(true);

    try {
      const res = await signIn("credentials", {
        redirect: true,
        username,
        password,
      });
      if (res?.error) {
        console.log("res error :::: ", res);
        setErrorMessage(res.error);
        setPending(false);
      } else {
        //success
        setPending(false);
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An error occurred during login");
      setPending(false);
    }
  };

  return (
    <div className="auth-container">
      <form>
        {errorMessage.length > 0 ? <h2>{errorMessage}</h2> : <h2>Login</h2>}
        <TextField
          name="username"
          label="Username"
          variant="outlined"
          value={username}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      </form>
      <button onClick={handleSubmit} disabled={pending ? true : false}>
        {pending ? "Loading" : "Login"}
      </button>
    </div>
  );
};

export default Auth;
