import { Link } from "react-router-dom";
import routes from "../../routes";
import { Cog8ToothIcon } from "@heroicons/react/20/solid";

import Button from "./Button";
import Logo from "./Logo";
import { useUser } from "../auth/UserContext";
import { useLogout } from "../auth/useLogout";

function MainNav() {
  const { currentUser, isLoadingUser, isAuthenticated } = useUser();
  const { mutate: logout, isLoading: isLoggingOut } = useLogout();

  return (
    <nav className="sticky top-0 flex flex-col gap-5 border-b-2 border-black bg-white p-5 xl:min-h-screen xl:justify-start xl:border-b-0 xl:border-r-2 xl:p-20">
      <div className="flex items-center justify-between">
        <Logo />
        {isAuthenticated && (
          <Link to="/settings">
            <Cog8ToothIcon className="h-10 w-10 transition-colors  hover:fill-blue-500 xl:hidden" />
          </Link>
        )}
      </div>

      {!isAuthenticated && !isLoadingUser && (
        <div className="flex gap-5 xl:mt-auto xl:flex-col">
          <Link to={routes.login} className="w-full">
            <Button>Login</Button>
          </Link>
          <Link to={routes.signup} className="w-full">
            <Button>Sign Up</Button>
          </Link>
        </div>
      )}
      {currentUser && !isLoadingUser && (
        <>
          <img
            src="/default-user.jpg"
            alt=""
            className="mx-auto mt-10 hidden w-20 rounded-full object-cover xl:block"
          />
          <p className="mb-3 hidden text-center text-xl text-black xl:block">
            {currentUser.username}
          </p>

          <div className="flex gap-5 xl:mt-auto xl:flex-col">
            <div className="w-full xl:order-3">
              <Button onClick={() => logout()} disabled={isLoggingOut}>
                {isLoggingOut ? "Logging out" : "Logout"}
              </Button>
            </div>
            <div className="hidden xl:order-2 xl:block">
              <Link to="/settings" className="flex">
                <Button>
                  <span>Settings</span>
                </Button>
              </Link>
            </div>
            <div className="w-full xl:order-1">
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
