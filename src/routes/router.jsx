import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import FindTutors from "../pages/findTutors/FindTutors";
import AddTutorial from "./../pages/add-tutorial/AddTutorial";
import MyTutorial from "./../pages/my-turorial/MyTutorial";
import MyBooked from "./../pages/Mybooked/MyBooked";
import Update from "./../pages/update/Update";
import Details from "../pages/details/Details";
import Login from "../pages/login/Login";
import Register from "../pages/registration/Register";
import CategoryTutors from "../pages/categoryTutors/CategoryTutors";
import PrivateRoute from "./privateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/find-tutors",
        element: (
          <PrivateRoute>
            <FindTutors></FindTutors>
          </PrivateRoute>
        ),
      },
      {
        path: "/find-tutors/:category",
        element: (
          <PrivateRoute>
            <CategoryTutors></CategoryTutors>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-tutorial",
        element: (
          <PrivateRoute>
            <AddTutorial></AddTutorial>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-tutorial/:email",
        element: (
          <PrivateRoute>
            <MyTutorial></MyTutorial>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-booked",
        element: (
          <PrivateRoute>
            <MyBooked></MyBooked>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
      {
        path: "/tutor/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
    ],
  },
]);
