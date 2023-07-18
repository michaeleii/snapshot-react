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
  console.log(posts);
  if (isLoading) return <div>Loading...</div>;
  if (!posts) return null;
  return (
    <div className="grid grid-cols-1 justify-items-center gap-10 overflow-y-auto p-10  px-5 xl:max-h-screen xl:p-20">
      {posts.pages.map((page) => {
        return page.data.length === 0 ? (
          <p>You've viewed every post</p>
        ) : (
          page.data.map((post) => (
            <Card
              key={post.id}
              username={post.user?.username || "Anonymous User"}
              profileImage="/default-user.jpg"
              image={post.image_url}
            />
          ))
        );
      })}
      <div className="max-w-xs xl:max-w-sm">
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
