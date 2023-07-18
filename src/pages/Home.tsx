import Card from "../features/misc/Card";
import { usePosts } from "../features/posts/usePosts";

function Home() {
  const { data: posts, isLoading } = usePosts();
  console.log(posts);
  if (isLoading) return <div>Loading...</div>;
  if (!posts) return null;
  return (
    <div className="grid grid-cols-1 justify-items-center gap-10 overflow-y-auto p-10  px-5 xl:max-h-screen xl:p-20">
      {posts.map((post) => (
        <Card
          key={post.id}
          username="Random User"
          profileImage="/default-user.jpg"
          image={post.image_url}
        />
      ))}
    </div>
  );
}
export default Home;
