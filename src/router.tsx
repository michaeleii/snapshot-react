import { createBrowserRouter } from "react-router-dom";
import routes from "./routes";

import Home from "./pages/Home";
import UploadImage from "./features/posts/UploadImage";
import MainLayout from "./pages/MainLayout";
import FormLayout from "./pages/Login";
import LoginForm from "./features/auth/LoginForm";
import SignupForm from "./features/auth/SignupForm";
import UserProvider from "./features/user/UserContext";
import ProtectedRoute from "./features/auth/ProtectedRoute";
import AlreadyLoggedIn from "./features/auth/AlreadyLoggedIn";

const router = createBrowserRouter([
  {
    path: routes.home,
    element: (
      <UserProvider>
        <MainLayout />
      </UserProvider>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: routes.upload,
        element: (
          <ProtectedRoute>
            <UploadImage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: routes.login,
    element: (
      <UserProvider>
        <AlreadyLoggedIn>
          <FormLayout>
            <LoginForm />
          </FormLayout>
        </AlreadyLoggedIn>
      </UserProvider>
    ),
  },
  {
    path: routes.signup,
    element: (
      <AlreadyLoggedIn>
        <FormLayout>
          <SignupForm />
        </FormLayout>
      </AlreadyLoggedIn>
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
