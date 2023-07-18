import { createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import Home from "./pages/Home";
import UploadImage from "./features/posts/UploadImage";
import MainLayout from "./pages/MainLayout";
import FormLayout from "./pages/Login";
import LoginForm from "./features/authentication/LoginForm";
import SignupForm from "./features/authentication/SignupForm";

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
    element: (
      <FormLayout>
        <LoginForm />
      </FormLayout>
    ),
  },
  {
    path: routes.signup,
    element: (
      <FormLayout>
        <SignupForm />
      </FormLayout>
    ),
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
