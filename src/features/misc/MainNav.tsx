import { Link } from "react-router-dom";
import routes from "../../routes";
import { PlusIcon } from "@heroicons/react/20/solid";

import Button from "./Button";
import Logo from "./Logo";
import { useUser } from "../user/UserContext";
import { useLogout } from "../auth/useLogout";

function MainNav() {
  const { currentUser, isLoadingUser } = useUser();
  const { mutate: logout, isLoading: isLoggingOut } = useLogout();

  return (
    <nav className="sticky top-0 flex flex-col gap-5 border-b-2 border-black bg-white p-5 xl:min-h-screen xl:justify-start xl:border-b-0 xl:border-r-2 xl:p-20">
      <div>
        <Logo />
      </div>

      {!currentUser && !isLoadingUser && (
        <div className="flex gap-5 self-end xl:self-center">
          <Link to={routes.login}>
            <Button>Login</Button>
          </Link>
          <Link to={routes.signup}>
            <Button>Sign Up</Button>
          </Link>
        </div>
      )}
      {currentUser && !isLoadingUser && (
        <>
          <p className="mb-3 hidden text-xl text-black xl:block">
            Welcome {currentUser.username}!
          </p>
          <div className="flex gap-5 self-center xl:flex-col">
            <div>
              <Button onClick={() => logout()} disabled={isLoggingOut}>
                {isLoggingOut ? "Logging out" : "Logout"}
              </Button>
            </div>
            <div>
              <Link to={routes.upload}>
                <Button>Create Post</Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
export default MainNav;
