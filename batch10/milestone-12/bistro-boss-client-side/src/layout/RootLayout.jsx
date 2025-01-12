import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
    const location = useLocation()
    const headerFooter = location.pathname
    const noHeaderFooter = headerFooter.includes("login") || headerFooter.includes("signup")
    return (
        <div>
            { noHeaderFooter || <Navbar />}
            <div className="min-h-[calc(100vh-260px)]">
            <Outlet />
            </div>
           { noHeaderFooter || <Footer />}
        </div>
    );
};

export default RootLayout;