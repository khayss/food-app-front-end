import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import SignupUser from "./auth/pages/user/SignUp";
import Dishes from "./pages/dishes";
import Dashboard from "./auth/pages/user/Dashboard";
import LoginAdmin from "./auth/pages/admin/Login";
import UserLogin from "./auth/pages/user/Login";
import SignupAdmin from "./auth/pages/admin/Signup";
import AdminDashboard from "./auth/pages/admin/Dashboard";
import Orders from "./auth/pages/admin/Orders";
import DishesAdmin from "./auth/pages/admin/DishesAdmin";
import NewDish from "./auth/pages/admin/NewDish";
import SignupRider from "./auth/pages/rider/Signup";
import LoginRider from "./auth/pages/rider/Login";
import RiderApplication from "./auth/pages/admin/RiderApplication";
import Home from "./pages/home";
import Order from "./auth/pages/user/Order";

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
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <UserLogin />,
      },
      {
        path: "/signup",
        element: <SignupUser />,
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
      {
        path: "/admin",
        children: [
          {
            path: "/admin/login",
            element: <LoginAdmin />,
          },
          {
            path: "/admin/signup",
            element: <SignupAdmin />,
          },
          {
            path: "/admin/dashboard",
            element: <AdminDashboard />,
          },
          {
            path: "/admin/orders",
            element: <Orders />,
          },
          {
            path: "/admin/dishes",
            element: <DishesAdmin />,
          },
          {
            path: "/admin/new-dish",
            element: <NewDish />,
          },
          {
            path: "/admin/rider",
            element: <RiderApplication />,
          },
        ],
      },
      {
        path: "/rider",
        children: [
          {
            path: "/rider/login",
            element: <LoginRider />,
          },
          {
            path: "/rider/signup",
            element: <SignupRider />,
          },
        ],
      },
    ],
  },
]);

export default router;
