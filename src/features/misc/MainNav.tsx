import { Link } from "react-router-dom";
import routes from "../../routes";
import Button from "./Button";

import Logo from "./Logo";

function MainNav() {
  return (
    <nav className="sticky top-0 flex flex-row items-center justify-around gap-5 border-b-2 border-black bg-white p-5 xl:min-h-screen xl:flex-col xl:justify-start xl:border-b-0 xl:border-r-2 xl:p-20">
      <Logo />
      <ul className="flex gap-5">
        <li>
          <Link to={routes.upload}>
            {" "}
            <Button>Create Post</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default MainNav;
