import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useSignUp() {
  const navigate = useNavigate();
  const { mutate, isLoading, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: ({
      username,
      email,
      password,
    }: {
      username: string;
      email: string;
      password: string;
    }) => signUp(username, email, password),
    onSuccess: () => {
      navigate("/");
    },
  });
  return { mutate, isLoading, error };
}
