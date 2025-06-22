/* import { signIn } from "next-auth/react";

export const login = async (
  formData: { username: string; password: string },
  setPending: (pending: boolean) => void,
  setErrorMessage: (message: string) => void,
) => {
  const { username, password } = formData;
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
  }; */
