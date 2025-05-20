import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="bg-black">
      <div className="h-16">
        <Navbar />
      </div>
      <div className="px-4 lg:px-0 lg:w-10/12 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
