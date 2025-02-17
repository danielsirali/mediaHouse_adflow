import { StrictMode } from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import 'boxicons/css/boxicons.min.css';
// import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./features/homePage/HomePage.tsx";
import MediaPage from "./features/media/Media.tsx";
import Bookings from "./features/bookings/Bookings.tsx";
import AuditLogs from "./features/auditLogs/AuditLogs.tsx";
import Settings from "./features/settings/Settings.tsx";
import PaymentsAndRevenue from "./features/paymentsAndRevenue/PaymentsAndRevenue.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/media",
    element: <MediaPage />,
  },
  {
    path: "/bookings",
    element: <Bookings />,
  },
  {
    path: "/payments-and-revenue",
    element: <PaymentsAndRevenue />,
  },
  {
    path: "/audit-logs",
    element: <AuditLogs />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
