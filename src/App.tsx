import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import Download from "./components/Download";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const App: React.FC = () => {
  return (
    <>
      <div className="top-headline">
        The health and well-being of our patients and their health care team
        will aways be our priority, so we follow the best practices for
        cleanliness
      </div>
      <Navbar />
      <RouterProvider router={router} />
      <Download />
      <Footer />
    </>
  );
};

export default App;
