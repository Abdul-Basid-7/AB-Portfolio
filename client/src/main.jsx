import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/ProtectedRoute";

import "./index.css";

import App from "./App";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/admin/login",
    element: <AdminLogin />,
  },

  {
    path: "/admin/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </>
  </React.StrictMode>
);