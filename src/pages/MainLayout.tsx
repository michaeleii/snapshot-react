import { Outlet } from "react-router-dom";
import MainNav from "../features/misc/MainNav";

function MainLayout() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[auto_1fr]">
      <MainNav />
      <Outlet />
    </div>
  );
}
export default MainLayout;
