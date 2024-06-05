import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Shoes from "./pages/Shoes";
import Tshirt from "./pages/Tshirt";
import Table from "./pages/Table";
import SampleTshirt from "./pages/Tshirt/SampleTshirt";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/shoes", element: <Shoes /> },
      { path: "/tshirt", element: <Tshirt /> },
      { path: "/table", element: <Table /> },
      { path: "/tshirt/:id", element: <SampleTshirt /> },
    ],
  },
]);

export default router;
