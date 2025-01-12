import { NavLink, Outlet } from "react-router-dom";
import { AiFillHome, AiOutlineMenuFold } from "react-icons/ai";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart()
    const isAdamin = true
    return (
        <div className="flex gap-10">
            <div className="min-h-screen bg-[#d1a054] md:w-44 p-2 lg:p-4 lg:w-64">
                <h2 className="text-2xl text-black px-2 lg:px-4">Bistor Boss</h2>
                <h4 className="px-2 lg:px-4 text-black">R e s t a u r a n t</h4>
                <ul className="menu space-y-3 text-base-content">
                    {/* Sidebar content here */}
                   {
                     isAdamin ? 
                     <>
                      <NavLink to="/" className={({isPending, isActive})=> `whitespace-nowrap flex items-center gap-2 md:text-xl ${isPending ? <LoadingSpinner /> : isActive ? "text-white" : undefined}`}><AiFillHome />Addmin Home</NavLink>
                    <NavLink to="/dashboard/cart" className={({isPending, isActive})=> `whitespace-nowrap flex items-center gap-2 md:text-xl ${isPending ? <LoadingSpinner /> : isActive ? "text-white" : undefined}`}><AiOutlineMenuFold />AddItems</NavLink>
                    <NavLink to="/dashboard/cart" className={({isPending, isActive})=> `whitespace-nowrap flex items-center gap-2 md:text-xl ${isPending ? <LoadingSpinner /> : isActive ? "text-white" : undefined}`}><AiOutlineMenuFold />Manage Items</NavLink>
                    <NavLink to="/dashboard/cart" className={({isPending, isActive})=> `whitespace-nowrap flex items-center gap-2 md:text-xl ${isPending ? <LoadingSpinner /> : isActive ? "text-white" : undefined}`}><AiOutlineMenuFold />Manage Bookings </NavLink>
                    <NavLink to="/dashboard/users" className={({isPending, isActive})=> `whitespace-nowrap flex items-center gap-2 md:text-xl ${isPending ? <LoadingSpinner /> : isActive ? "text-white" : undefined}`}><AiOutlineMenuFold />All Users</NavLink>
                   
                     </>
                     :
                     <>
                      <NavLink to="/" className={({isPending, isActive})=> `whitespace-nowrap flex items-center gap-2 md:text-xl ${isPending ? <LoadingSpinner /> : isActive ? "text-white" : undefined}`}><AiFillHome />User Home</NavLink>
                    <NavLink to="/dashboard/cart" className={({isPending, isActive})=> `whitespace-nowrap flex items-center gap-2 md:text-xl ${isPending ? <LoadingSpinner /> : isActive ? "text-white" : undefined}`}><AiOutlineMenuFold />Reservation</NavLink>
                    <NavLink to="/dashboard/cart" className={({isPending, isActive})=> `whitespace-nowrap flex items-center gap-2 md:text-xl ${isPending ? <LoadingSpinner /> : isActive ? "text-white" : undefined}`}><AiOutlineMenuFold />Payment History</NavLink>
                    <NavLink to="/dashboard/cart" className={({isPending, isActive})=> `whitespace-nowrap flex items-center gap-2 md:text-xl ${isPending ? <LoadingSpinner /> : isActive ? "text-white" : undefined}`}><AiOutlineMenuFold />My Cart ({cart.length})</NavLink>
                    <NavLink to="/dashboard/booking" className={({isPending, isActive})=> `whitespace-nowrap flex items-center gap-2 md:text-xl ${isPending ? <LoadingSpinner /> : isActive ? "text-white" : undefined}`}><AiOutlineMenuFold />Add Review</NavLink>
                    <NavLink to="/dashboard/booking" className={({isPending, isActive})=> `whitespace-nowrap flex items-center gap-2 md:text-xl ${isPending ? <LoadingSpinner /> : isActive ? "text-white" : undefined}`}><AiOutlineMenuFold />My Booking</NavLink>
                     </>
                   }
                    <hr />
                    <NavLink to="/" className={({isPending, isActive})=> `whitespace-nowrap flex items-center gap-2 md:text-xl ${isPending ? <LoadingSpinner /> : isActive ? "text-white" : undefined}`}><AiOutlineMenuFold />Home</NavLink>
                    <NavLink to="/menu" className={({isPending, isActive})=> `whitespace-nowrap flex items-center gap-2 md:text-xl ${isPending ? <LoadingSpinner /> : isActive ? "text-white" : undefined}`}><AiOutlineMenuFold />Menu</NavLink>
                    <NavLink to="/order/salad" className={({isPending, isActive})=> `whitespace-nowrap flex items-center gap-2 md:text-xl ${isPending ? <LoadingSpinner /> : isActive ? "text-white" : undefined}`}><AiOutlineMenuFold />Shop</NavLink>
                    <NavLink to="/dashboard/contact" className={({isPending, isActive})=> `whitespace-nowrap flex items-center gap-2 md:text-xl ${isPending ? <LoadingSpinner /> : isActive ? "text-white" : undefined}`}><AiOutlineMenuFold />Contact</NavLink>
                </ul>
            </div>
            <div className="flex-1 my-10">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;