import {
    createBrowserRouter,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import Order from "../pages/Order/Order/Order";
import Menu from "../pages/Menu/Menu/Menu";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import Secrete from "../pages/Secrete/Secrete";
import PrivateRouter from "../private/PrivateRouter";
import Dashboard from "../layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart";
import MyBooking from "../pages/Dashboard/MyBooking";
import AllUsers from "../pages/Dashboard/AllUsers";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "menu",
                element: <Menu />
            },
            {
                path: "order/:category",
                element: <Order />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "signup",
                element: <SignUp />
            },
            {
                path: "secrete",
                element: <PrivateRouter><Secrete /></PrivateRouter>
            },
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRouter><Dashboard /></PrivateRouter>,
        children: [
            {
                path: "cart",
                element: <MyCart />
            },
            {
                path: "booking",
                element: <MyBooking />
            },
            {
                path: "users",
                element: <AllUsers />
            },
        ]
    },
]);

export default router