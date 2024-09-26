import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErroPage/ErrorPage";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Title from "../Componets/Title";
import Dashboard from "../Layouts/Dashboard";
import AddProduct from "../Dashboard/AddProduct";
import TestMother from "../test/TestMother";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/test",
        element: <TestMother />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <Title>Dashboard</Title>,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct></AddProduct>,
      },
    ],
  },
]);
export default MainRoutes;
