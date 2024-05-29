import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import Download from "./components/Download";
import MyBookings from "./pages/MyBookings";
import { Typography } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path : "/user/bookings",
    element  : <MyBookings />
  }
]);

const App: React.FC = () => {
  return (
    <>
      <Typography className="top-headline">
        The health and well-being of our patients and their health care team
        will aways be our priority, so we follow the best practices for
        cleanliness.
      </Typography>
      <Navbar />
      <RouterProvider router={router} />
      <Download />
      <Footer />
    </>
  );
};

export default App;
