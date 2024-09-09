import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Master from "./master/Master";
import { HomePage } from "./pages/homepage/HomePage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./custom-bootstrap.scss";
const router = createBrowserRouter([
  {
    element: <Master />,
    path: "/",
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
