import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Shoes from "./pages/Shoes";
import Tshirt from "./pages/Tshirt";
import Table from "./pages/Table";
import SampleTshirt from "./pages/Tshirt/SampleTshirt";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Casual from "./pages/Shoes/Casual";
import Error from "./pages/Error";
import App from "./App";
import Signin from "./pages/Signin";
import Signup from './pages/Signup'
import Shipping from './pages/Shipping'
import Checkout from './pages/Checkout'
import Airforce from './pages/Shoes/Airforce'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/shoes", element: <Shoes /> },
      { path: "/tshirt", element: <Tshirt /> },
      { path: "/tshirt/:id", element: <SampleTshirt /> },
      { path: "/table", element: <Table /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/shoes/casual", element: <Casual /> },
      {path: "/shoes/airforce", element:<Airforce/>},
      {path:'/signin', element:<Signin/>},
      {path:'/signup', element:<Signup/>},
      {path:'/shipping', element:<Shipping/>},
      {path:'/checkout', element:<Checkout />},
      { path: "*", element: <Error /> },
    ],
  },
]);

export default router;
