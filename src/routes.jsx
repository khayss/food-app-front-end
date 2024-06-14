import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "./auth/pages/Login";
import MainLayout from "./layouts/MainLayout";
import SignUp from "./auth/pages/SignUp";
import Dishes from "./pages/dishes";
import Order from "./pages/order";
import Dashboard from "./pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/dishes",
        element: <Dishes />,
      },
      {
        path: "/dish/:id",
        element: <Order />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
