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
        element: <FindTutors></FindTutors>,
      },
      {
        path: "/add-tutorial",
        element: <AddTutorial></AddTutorial>,
      },
      {
        path: "/my-tutorial",
        element: <MyTutorial></MyTutorial>,
      },
      {
        path: "/my-booked",
        element: <MyBooked></MyBooked>,
      },
      {
        path: "/update",
        element: <Update></Update>,
      },
      {
        path: "/details",
        element: <Details></Details>,
      },
    ],
  },
]);
