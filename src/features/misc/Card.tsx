import { HeartIcon } from "@heroicons/react/24/outline";
function Card({
  username,
  profileImage,
  image,
}: {
  username: string;
  profileImage: string;
  image: string;
}) {
  return (
    <div className="max-w-xs bg-white xl:max-w-sm">
      <img src={image} alt="Image" className="w-full" />
      <div className="flex items-center gap-5 p-3">
        <img
          src={profileImage}
          alt={username}
          className="h-10 w-10 rounded-full object-cover shadow-inner"
        />
        <span>{username}</span>
        {/* <div className="ml-auto">
          <HeartIcon className="h-7 w-7 hover:cursor-pointer hover:fill-red-400" />
        </div> */}
      </div>
    </div>
  );
}
export default Card;
