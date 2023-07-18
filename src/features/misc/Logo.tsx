import { CameraIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import routes from "../../routes";

function Logo() {
  return (
    <Link to={routes.home}>
      <h1 className="flex items-center gap-5 text-5xl font-bold tracking-tighter">
        <CameraIcon className="h-12 w-12" /> Snapshot
      </h1>
    </Link>
  );
}
export default Logo;
