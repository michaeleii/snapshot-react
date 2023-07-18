import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../services/apiPost";

export function usePosts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
  });
  return { data, isLoading, error };
}
