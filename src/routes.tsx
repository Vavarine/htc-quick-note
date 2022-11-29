import { createBrowserRouter } from "react-router-dom";
import { Auth } from "./pages/auth";
import { Login } from "./pages/auth/Login";
import { SignUp } from "./pages/auth/SignUp";
import { Home } from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
]);
