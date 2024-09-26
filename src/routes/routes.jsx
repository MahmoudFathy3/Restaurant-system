import { createBrowserRouter } from "react-router-dom";
import CashierLayout from "@layouts/CashierLayout";
import Home from "@pages/Cashier/Home/Home";
import AllItems from "@pages/Cashier/All items/AllItems";
import Customers from "@pages/Cashier/Customers/Customers";
import Delivery from "@pages/Cashier/Delivery/Delivery";
import Tables from "@pages/Cashier/Tables/Tables";

// Auth
import Login from "@pages/Auth/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CashierLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-items",
        element: <AllItems />,
      },
    ],
  },
  {
    path: "/customers",
    element: <Customers />,
  },
  {
    path: "/delivery",
    element: <Delivery />,
  },
  {
    path: "/tables",
    element: <Tables />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
