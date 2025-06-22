"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import {
  Button,
  Card,
  CardHeader,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@mui/material";
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
    <Card
      className="auth-container"
      sx={{ maxWidth: 400, margin: "auto", padding: 2 }}
    >
      <CardHeader title="Login" />
      <form>
        <FormControl fullWidth margin="normal" required error={!!errorMessage}>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input
            required
            name="username"
            value={username}
            onChange={handleChange}
            id="username"
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <FormControl
          required
          variant="outlined"
          fullWidth
          margin="normal"
          error={!!errorMessage}
        >
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            id="password"
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <Button
          variant="contained"
          type="submit"
          fullWidth
          onClick={handleSubmit}
          disabled={username === "" || password === ""}
          loading={pending}
        >
          Log In
        </Button>
      </form>
    </Card>
  );
};

export default Auth;
