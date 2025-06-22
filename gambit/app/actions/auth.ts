import { signIn } from "next-auth/react";

export const login = async (
  formData: { username: string; password: string },
  setPending: (pending: boolean) => void
) => {
  const { username, password } = formData;

  try {
    setPending(true);
    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });
    if (res?.error) {
      console.log("res error :::: ", res);
      // setErrorMessage(res.error);
      setPending(false);
    } else {
      setPending(false);
      // Handle successful login here (e.g., redirect or store user data)
    }
  } catch (error) {
    console.error("Login error:", error);
    // setErrorMessage("An error occurred during login");
    setPending(false);
  }
};
