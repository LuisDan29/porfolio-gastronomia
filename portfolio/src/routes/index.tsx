import { createBrowserRouter } from "react-router-dom";

import Layout from "../layouts/Layout";
import App from "../pages/App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { 
        path: "/", 
        element: <App /> 
      }
    ]
  }
])