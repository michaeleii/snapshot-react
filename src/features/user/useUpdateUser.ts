import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["updateUser"],
    mutationFn: ({ username }: { username: string }) => updateUser(username),
    onSuccess: async () => {
      await queryClient.invalidateQueries(["user"]);
    },
  });
  return { mutate, isLoading };
}
