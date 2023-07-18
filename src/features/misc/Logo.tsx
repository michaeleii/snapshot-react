import { CameraIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import routes from "../../routes";

function Logo() {
  return (
    <Link to={routes.home}>
      <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tighter xl:gap-5 xl:text-5xl">
        <CameraIcon className="h-8 w-8 xl:h-12 xl:w-12" /> Snapshot
      </h1>
    </Link>
  );
}
export default Logo;
