import { createBrowserRouter } from "react-router-dom";
// PAGES
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import MyOrders from "./pages/MyOrders";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/account",
    children: [
      {
        path: "", // Cambiado de "/" a "" para que sea relativo a "/account"
        element: <MyAccount />,
      },
      {
        path: "orders", // Cambiado de "/orders" a "orders"
        element: <MyOrders />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
