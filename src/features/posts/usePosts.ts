import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../services/apiPost";

export function usePosts() {
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
    data,
  } = useInfiniteQuery({
    queryKey: ["posts", "infinite"],
    queryFn: ({ pageParam = 0 }) => getAllPosts(+pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage.data.length === 0) {
        return undefined;
      }
      return lastPage.page + 1;
    },
  });
  return {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
}
