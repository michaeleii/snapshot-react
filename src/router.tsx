import { createBrowserRouter } from "react-router-dom";
import routes from "./routes";

import Home from "./pages/Home";
import UploadImage from "./features/posts/UploadImage";
import MainLayout from "./pages/MainLayout";
import FormLayout from "./pages/Login";
import LoginForm from "./features/auth/LoginForm";
import SignupForm from "./features/auth/SignupForm";
import UserProvider from "./features/auth/UserContext";
import ProtectedRoute from "./features/auth/ProtectedRoute";
import AlreadyLoggedIn from "./features/auth/AlreadyLoggedIn";
import SettingsForm from "./features/user/SettingsForm";

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
      {
        path: routes.settings,
        element: (
          <ProtectedRoute>
            <SettingsForm />
          </ProtectedRoute>
        ),
      },
      {
        path: routes.profile,
        element: <div>Profile</div>,
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
]);

export default router;
