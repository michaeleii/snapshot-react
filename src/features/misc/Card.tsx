import { TrashIcon } from "@heroicons/react/24/outline";
import { useDeletePost } from "../posts/useDeletePost";
import { useUser } from "../auth/UserContext";

// import { HeartIcon } from "@heroicons/react/24/outline";
function Card({
  postId,
  userId,
  username,
  profileImage,
  image,
}: {
  postId: number;
  userId?: string;
  username: string;
  profileImage: string;
  image: string;
}) {
  const { mutate: deletePost, isLoading: isDeleting } = useDeletePost();
  const { currentUser } = useUser();
  const isOwner = currentUser?.id === userId;
  return (
    <div className="max-w-xs  bg-white xl:max-w-sm">
      <img src={image} alt="Image" className="w-full shadow-inner" />
      <div className="flex items-center gap-5 p-3">
        <img
          src={profileImage}
          className="h-10 w-10 rounded-full object-cover object-center"
        />
        <span>{username}</span>
        {isOwner && !isDeleting && (
          <div className="ml-auto">
            <TrashIcon
              className="h-6 w-6 transition-colors hover:cursor-pointer hover:fill-red-100 hover:text-red-900"
              onClick={() => deletePost(postId)}
            />
          </div>
        )}
        {/* <div className="ml-auto">
          <HeartIcon className="h-7 w-7 hover:cursor-pointer hover:fill-red-400" />
        </div> */}
      </div>
    </div>
  );
}
export default Card;
