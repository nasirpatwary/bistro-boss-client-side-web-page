import { NavLink } from "react-router-dom";
import shop from "../assets/icon/shop.png"
const Navbar = () => {
    const links = <>
    <NavLink className={({isPending, isActive})=> `${isPending ? "pending" : isActive ? "text-[#EEFF25]" : undefined}`} to="/">Home</NavLink>
    <NavLink className={({isPending, isActive})=> `${isPending ? "pending" : isActive ? "text-[#EEFF25]" : undefined}`} to="/contacts">CONTACT us</NavLink>
    <NavLink className={({isPending, isActive})=> `${isPending ? "pending" : isActive ? "text-[#EEFF25]" : undefined}`} to="/dashboard">DASHBOARD</NavLink>
    <NavLink className={({isPending, isActive})=> `${isPending ? "pending" : isActive ? "text-[#EEFF25]" : undefined}`} to="/our-menu">Our Menu</NavLink>
    <NavLink className={({isPending, isActive})=> `${isPending ? "pending" : isActive ? "text-[#EEFF25]" : undefined}`} to="/our-shop">Our Shop</NavLink>
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
                            <img className="w-8" src={shop} alt="" />
                        </ul>
                    </div>
                    <a className="text-xl text-white">Bistro Boss</a>
                </div>
                <div>
                    <div className="hidden lg:flex">
                        <ul className="menu gap-5 text-white menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                   <div className="flex gap-2 text-white">
                   <img className="w-8" src={shop} alt="" />
                   <button>Sign Out</button>
                   <img src="" alt="" />
                   </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;