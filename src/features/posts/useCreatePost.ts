import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../services/apiPost";

export function useCreatePost() {
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["createPost"],
    mutationFn: (image: File) => createPost(image),
    onSuccess: () => {
      navigate("/");
    },
  });
  return { mutate, isLoading };
}
