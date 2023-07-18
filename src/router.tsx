import { createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import Home from "./pages/Home";
import UploadImage from "./features/posts/UploadImage";
import MainLayout from "./pages/MainLayout";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: routes.upload,
        element: <UploadImage />,
      },
    ],
  },
  {
    path: routes.login,
    element: <Login />,
  },

  {
    path: routes.search,
    element: <div>Search</div>,
  },
  {
    path: routes.profile,
    element: <div>Profile</div>,
  },
]);

export default router;
