import { Link, NavLink } from "react-router-dom";
import shop from "../assets/icon/shop.png"
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
const Navbar = () => {
    const [cart] = useCart()
    const [isAdmin] = useAdmin()
    const {user, signOutUser} = useAuth()
    const handleSignOut = () =>{
        signOutUser()
        .then(() =>{
            console.log("Sign Out Success full");
        })
        .catch(error => console.error(error))
    }
    const links = <>
    <NavLink className={({isPending, isActive})=> `${isPending ? <LoadingSpinner /> : isActive ? "text-[#EEFF25]" : undefined}`} to="/">Home</NavLink>
    <NavLink className={({isPending, isActive})=> `${isPending ? <LoadingSpinner /> : isActive ? "text-[#EEFF25]" : undefined}`} to="/menu">Our Menu</NavLink>
    <NavLink className={({isPending, isActive})=> `${isPending ? <LoadingSpinner /> : isActive ? "text-[#EEFF25]" : undefined}`} to="/order/salad">Order Food</NavLink>
    
    {
        user && <NavLink className={({isPending, isActive})=> `${isPending ? <LoadingSpinner /> : isActive ? "text-[#EEFF25]" : undefined}`} to={isAdmin ? "/dashboard/adminHome" : "/dashboard/userHome"}>Dashboard</NavLink>
    }

    {
        user ? 
        <>
        <button onClick={handleSignOut} className="">Sign Out</button>
        <span className="cursor-pointer">{user?.displayName}</span>
        </>
        :
        <>
        <NavLink className={({isPending, isActive})=> `${isPending ? <LoadingSpinner /> : isActive ? "text-[#EEFF25]" : undefined}`} to="/login">Login</NavLink>
        </>
    }
    </>
    return (
        <nav>
            <div className="navbar fixed z-10 md:container backdrop-blur-sm bg-black/30 justify-between p-0">
                <div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu space-y-3 menu-sm border dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                            <Link to="/dashboard/cart"><div className="badge badge-secondary">+{cart.length}</div></Link>
                            <img className="w-8" src={shop} alt="" />
                        </ul>
                    </div>
                    <a className="text-xl text-white">Bistro Boss</a>
                </div>
                <div>
                    <div className="hidden items-center lg:flex">
                        <ul className="menu gap-5 text-white menu-horizontal px-1">
                            {links}
                        </ul>
                        <Link to="/dashboard/cart"><div className="badge badge-secondary">+{cart.length}</div></Link>
                        <img className="w-8" src={shop} alt="" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;