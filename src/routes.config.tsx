import { createBrowserRouter } from "react-router-dom";
// PAGES
import AppLayout from "./components/layouts/AppLayout";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import MyOrders from "./pages/MyOrders";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
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
        element: <MyAccount />,
      },
      {
        path: "/orders",
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
