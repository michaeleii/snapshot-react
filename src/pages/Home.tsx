import Button from "../features/misc/Button";
import Card from "../features/misc/Card";
import { usePosts } from "../features/posts/usePosts";

function Home() {
  const {
    data: posts,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = usePosts();
  if (isLoading) return null;
  if (!posts) return null;
  return (
    <div className="grid grid-cols-1 justify-items-center gap-10 overflow-y-auto p-10  px-5 xl:max-h-screen xl:p-20">
      {posts.pages.map((page) => {
        return page.data.length === 0 ? (
          <p>You have viewed every post 🎉</p>
        ) : (
          page.data.map((post) => (
            <Card
              key={post.id}
              postId={post.id}
              userId={post.user?.id}
              username={post.user?.username || "Anonymous User"}
              profileImage="/default-user.jpg"
              image={post.image_url}
            />
          ))
        );
      })}
      <div className="w-full xl:max-w-sm">
        {hasNextPage && (
          <Button
            disabled={isFetchingNextPage}
            onClick={() => {
              fetchNextPage().catch((err) => console.log(err));
            }}
          >
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </Button>
        )}
      </div>
    </div>
  );
}
export default Home;
