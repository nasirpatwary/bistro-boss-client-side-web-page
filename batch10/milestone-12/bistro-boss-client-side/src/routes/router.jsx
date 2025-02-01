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
import AddItems from "../pages/Dashboard/AddItems";
import PrivateAdmin from "../private/PrivateAdmin";
import ManageItem from "../pages/Dashboard/ManageItem";
import UpdateItem from "../pages/Dashboard/UpdateItem";
import Payment from "../pages/Dashboard/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory";
import AdminHome from "../pages/Dashboard/AdminHome";
import UserHome from "../pages/Dashboard/UserHome";


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
            // normal user toutes
            {
                path: "userHome",
                element: <UserHome />
            },
            {
                path: "cart",
                element: <MyCart />
            },
            {
                path: "payment",
                element: <Payment />
            },
            {
                path: "paymentHistory",
                element: <PaymentHistory />
            },
            {
                path: "booking",
                element: <MyBooking />
            },
            // admin only routes 
            {
                path: "adminHome",
                element: <PrivateAdmin><AdminHome /></PrivateAdmin>
            },
            {
                path: "addItems",
                element: <PrivateAdmin><AddItems /></PrivateAdmin>
            },
            {
                path: "manageItems",
                element: <PrivateAdmin><ManageItem /></PrivateAdmin>
            },
            {
                path: "updateItem/:id",
                element: <PrivateAdmin><UpdateItem /></PrivateAdmin>
            },
            {
                path: "users",
                element: <PrivateAdmin><AllUsers /></PrivateAdmin>
            },
        ]
    },
]);

export default router