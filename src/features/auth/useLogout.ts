import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../services/apiAuth";

export function useLogout() {
  const queryClient = useQueryClient();
  const { mutate, isLoading, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: logout,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
  return { mutate, isLoading, error };
}
