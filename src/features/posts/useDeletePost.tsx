import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "../../services/apiPost";

export function useDeletePost() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["deletePost"],
    mutationFn: (id: number) => deletePost(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
  return { mutate, isLoading };
}
