import { Children, PropsWithChildren } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/authContext";
import { Auth } from "./pages/auth";
import { Login } from "./pages/auth/Login";
import { SignUp } from "./pages/auth/SignUp";
import { Home } from "./pages/Home";

function PrivateRoute({ children }: PropsWithChildren) {
  const { user } = useAuth();

  return user ? <>{children}</> : <Navigate to="/login" />;
}

export const router = createBrowserRouter([
  {
    element: <AuthProvider />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        element: <Auth />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/sign-up",
            element: <SignUp />,
          },
        ],
      },
    ],
  },
]);
