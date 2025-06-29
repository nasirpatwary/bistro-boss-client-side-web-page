import { NavLink, Outlet } from "react-router-dom";
import { AiFillHome, AiOutlineMenuFold } from "react-icons/ai";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { CiLogin } from "react-icons/ci";
const Dashboard = () => {
  const [cart] = useCart();
  const { user, signOutUser } = useAuth();
  const [isAdmin] = useAdmin();
  return (
    <div className="flex px-4 md:px-0 md:gap-10">
      {/* medium device and full  screen */}
      <div className="min-h-screen hidden  lg:block bg-[#d1a054] md:w-52 p-2 lg:p-4 lg:w-64">
        <h2 className="text-2xl text-black px-2 lg:px-4">Bistor Boss</h2>
        <h4 className="px-2 lg:px-4 text-black">R e s t a u r a n t</h4>
        <ul className="menu space-y-3 text-base-content">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <NavLink
                to="/dashboard/adminHome"
                className={({ isPending, isActive }) =>
                  `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                    isPending ? (
                      <LoadingSpinner />
                    ) : isActive ? (
                      "text-white"
                    ) : undefined
                  }`
                }
              >
                <AiFillHome />
                Addmin Home
              </NavLink>
              <NavLink
                to="/dashboard/addItems"
                className={({ isPending, isActive }) =>
                  `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                    isPending ? (
                      <LoadingSpinner />
                    ) : isActive ? (
                      "text-white"
                    ) : undefined
                  }`
                }
              >
                <AiOutlineMenuFold />
                AddItems
              </NavLink>
              <NavLink
                to="/dashboard/manageItems"
                className={({ isPending, isActive }) =>
                  `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                    isPending ? (
                      <LoadingSpinner />
                    ) : isActive ? (
                      "text-white"
                    ) : undefined
                  }`
                }
              >
                <AiOutlineMenuFold />
                Manage Items
              </NavLink>
              <NavLink
                to="/dashboard/manageBookings"
                className={({ isPending, isActive }) =>
                  `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                    isPending ? (
                      <LoadingSpinner />
                    ) : isActive ? (
                      "text-white"
                    ) : undefined
                  }`
                }
              >
                <AiOutlineMenuFold />
                Manage Bookings{" "}
              </NavLink>
              <NavLink
                to="/dashboard/users"
                className={({ isPending, isActive }) =>
                  `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                    isPending ? (
                      <LoadingSpinner />
                    ) : isActive ? (
                      "text-white"
                    ) : undefined
                  }`
                }
              >
                <AiOutlineMenuFold />
                All Users
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/dashboard/userHome"
                className={({ isPending, isActive }) =>
                  `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                    isPending ? (
                      <LoadingSpinner />
                    ) : isActive ? (
                      "text-white"
                    ) : undefined
                  }`
                }
              >
                <AiFillHome />
                User Home
              </NavLink>
              <NavLink
                to="/dashboard/reservation
                                "
                className={({ isPending, isActive }) =>
                  `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                    isPending ? (
                      <LoadingSpinner />
                    ) : isActive ? (
                      "text-white"
                    ) : undefined
                  }`
                }
              >
                <AiOutlineMenuFold />
                Reservation
              </NavLink>
              <NavLink
                to="/dashboard/paymentHistory"
                className={({ isPending, isActive }) =>
                  `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                    isPending ? (
                      <LoadingSpinner />
                    ) : isActive ? (
                      "text-white"
                    ) : undefined
                  }`
                }
              >
                <AiOutlineMenuFold />
                Payment History
              </NavLink>
              <NavLink
                to="/dashboard/cart"
                className={({ isPending, isActive }) =>
                  `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                    isPending ? (
                      <LoadingSpinner />
                    ) : isActive ? (
                      "text-white"
                    ) : undefined
                  }`
                }
              >
                <AiOutlineMenuFold />
                My Cart ({cart.length})
              </NavLink>
              <NavLink
                to="/dashboard/review"
                className={({ isPending, isActive }) =>
                  `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                    isPending ? (
                      <LoadingSpinner />
                    ) : isActive ? (
                      "text-white"
                    ) : undefined
                  }`
                }
              >
                <AiOutlineMenuFold />
                Add Review
              </NavLink>
              <NavLink
                to="/dashboard/booking"
                className={({ isPending, isActive }) =>
                  `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                    isPending ? (
                      <LoadingSpinner />
                    ) : isActive ? (
                      "text-white"
                    ) : undefined
                  }`
                }
              >
                <AiOutlineMenuFold />
                My Booking
              </NavLink>
            </>
          )}
          <hr />
          <NavLink
            to="/"
            className={({ isPending, isActive }) =>
              `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                isPending ? (
                  <LoadingSpinner />
                ) : isActive ? (
                  "text-white"
                ) : undefined
              }`
            }
          >
            <AiOutlineMenuFold />
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isPending, isActive }) =>
              `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                isPending ? (
                  <LoadingSpinner />
                ) : isActive ? (
                  "text-white"
                ) : undefined
              }`
            }
          >
            <AiOutlineMenuFold />
            Menu
          </NavLink>
          <NavLink
            to="/order/salad"
            className={({ isPending, isActive }) =>
              `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                isPending ? (
                  <LoadingSpinner />
                ) : isActive ? (
                  "text-white"
                ) : undefined
              }`
            }
          >
            <AiOutlineMenuFold />
            Shop
          </NavLink>
          <NavLink
            to="/dashboard/contact"
            className={({ isPending, isActive }) =>
              `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                isPending ? (
                  <LoadingSpinner />
                ) : isActive ? (
                  "text-white"
                ) : undefined
              }`
            }
          >
            <AiOutlineMenuFold />
            Contact
          </NavLink>
        </ul>
        <div className="mt-16">
          {user ? (
            <>
              <button
                onClick={signOutUser}
                className="flex text-xl items-center gap-2"
              >
                <CiLogin size={20} /> Log Out
              </button>
            </>
          ) : (
            <>
              <NavLink
                className={({ isPending, isActive }) =>
                  `${
                    isPending ? (
                      <LoadingSpinner />
                    ) : isActive ? (
                      "text-[#EEFF25]"
                    ) : undefined
                  }`
                }
                to="/login"
              >
                Login
              </NavLink>
            </>
          )}
        </div>
      </div>
      {/* mobile device */}
      <div className="lg:hidden z-10">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn drawer-button absolute">
            Side Menu
            <AiOutlineMenuFold size={20} />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu min-h-screen absolute bg-[#d1a054] w-64">
            <h2 className="text-2xl text-black px-2 lg:px-4">Bistor Boss</h2>
            <h4 className="px-2 lg:px-4 text-black">R e s t a u r a n t</h4>
            <ul className="menu space-y-3 text-base-content">
              {/* Sidebar content here */}
              {isAdmin ? (
                <>
                  <NavLink
                    to="/"
                    className={({ isPending, isActive }) =>
                      `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                        isPending ? (
                          <LoadingSpinner />
                        ) : isActive ? (
                          "text-white"
                        ) : undefined
                      }`
                    }
                  >
                    <AiFillHome />
                    Addmin Home
                  </NavLink>
                  <NavLink
                    to="/dashboard/addItems"
                    className={({ isPending, isActive }) =>
                      `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                        isPending ? (
                          <LoadingSpinner />
                        ) : isActive ? (
                          "text-white"
                        ) : undefined
                      }`
                    }
                  >
                    <AiOutlineMenuFold />
                    AddItems
                  </NavLink>
                  <NavLink
                    to="/dashboard/manageItems"
                    className={({ isPending, isActive }) =>
                      `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                        isPending ? (
                          <LoadingSpinner />
                        ) : isActive ? (
                          "text-white"
                        ) : undefined
                      }`
                    }
                  >
                    <AiOutlineMenuFold />
                    Manage Items
                  </NavLink>
                  <NavLink
                    to="/dashboard/manageBookings"
                    className={({ isPending, isActive }) =>
                      `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                        isPending ? (
                          <LoadingSpinner />
                        ) : isActive ? (
                          "text-white"
                        ) : undefined
                      }`
                    }
                  >
                    <AiOutlineMenuFold />
                    Manage Bookings{" "}
                  </NavLink>
                  <NavLink
                    to="/dashboard/users"
                    className={({ isPending, isActive }) =>
                      `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                        isPending ? (
                          <LoadingSpinner />
                        ) : isActive ? (
                          "text-white"
                        ) : undefined
                      }`
                    }
                  >
                    <AiOutlineMenuFold />
                    All Users
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to="/"
                    className={({ isPending, isActive }) =>
                      `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                        isPending ? (
                          <LoadingSpinner />
                        ) : isActive ? (
                          "text-white"
                        ) : undefined
                      }`
                    }
                  >
                    <AiFillHome />
                    User Home
                  </NavLink>
                  <NavLink
                    to="/dashboard/reservation
                                "
                    className={({ isPending, isActive }) =>
                      `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                        isPending ? (
                          <LoadingSpinner />
                        ) : isActive ? (
                          "text-white"
                        ) : undefined
                      }`
                    }
                  >
                    <AiOutlineMenuFold />
                    Reservation
                  </NavLink>
                  <NavLink
                    to="/dashboard/paymentHistory"
                    className={({ isPending, isActive }) =>
                      `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                        isPending ? (
                          <LoadingSpinner />
                        ) : isActive ? (
                          "text-white"
                        ) : undefined
                      }`
                    }
                  >
                    <AiOutlineMenuFold />
                    Payment History
                  </NavLink>
                  <NavLink
                    to="/dashboard/cart"
                    className={({ isPending, isActive }) =>
                      `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                        isPending ? (
                          <LoadingSpinner />
                        ) : isActive ? (
                          "text-white"
                        ) : undefined
                      }`
                    }
                  >
                    <AiOutlineMenuFold />
                    My Cart ({cart.length})
                  </NavLink>
                  <NavLink
                    to="/dashboard/review"
                    className={({ isPending, isActive }) =>
                      `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                        isPending ? (
                          <LoadingSpinner />
                        ) : isActive ? (
                          "text-white"
                        ) : undefined
                      }`
                    }
                  >
                    <AiOutlineMenuFold />
                    Add Review
                  </NavLink>
                  <NavLink
                    to="/dashboard/booking"
                    className={({ isPending, isActive }) =>
                      `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                        isPending ? (
                          <LoadingSpinner />
                        ) : isActive ? (
                          "text-white"
                        ) : undefined
                      }`
                    }
                  >
                    <AiOutlineMenuFold />
                    My Booking
                  </NavLink>
                </>
              )}
              <hr />
              <NavLink
                to="/"
                className={({ isPending, isActive }) =>
                  `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                    isPending ? (
                      <LoadingSpinner />
                    ) : isActive ? (
                      "text-white"
                    ) : undefined
                  }`
                }
              >
                <AiOutlineMenuFold />
                Home
              </NavLink>
              <NavLink
                to="/menu"
                className={({ isPending, isActive }) =>
                  `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                    isPending ? (
                      <LoadingSpinner />
                    ) : isActive ? (
                      "text-white"
                    ) : undefined
                  }`
                }
              >
                <AiOutlineMenuFold />
                Menu
              </NavLink>
              <NavLink
                to="/order/salad"
                className={({ isPending, isActive }) =>
                  `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                    isPending ? (
                      <LoadingSpinner />
                    ) : isActive ? (
                      "text-white"
                    ) : undefined
                  }`
                }
              >
                <AiOutlineMenuFold />
                Shop
              </NavLink>
              <NavLink
                to="/dashboard/contact"
                className={({ isPending, isActive }) =>
                  `whitespace-nowrap flex items-center gap-2 md:text-xl ${
                    isPending ? (
                      <LoadingSpinner />
                    ) : isActive ? (
                      "text-white"
                    ) : undefined
                  }`
                }
              >
                <AiOutlineMenuFold />
                Contact
              </NavLink>
            </ul>
            <div className="md:mt-16 mt-4">
              {user ? (
                <>
                  <button
                    onClick={signOutUser}
                    className="flex text-xl items-center gap-2"
                  >
                    <CiLogin size={20} /> Log Out
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    className={({ isPending, isActive }) =>
                      `${
                        isPending ? (
                          <LoadingSpinner />
                        ) : isActive ? (
                          "text-[#EEFF25]"
                        ) : undefined
                      }`
                    }
                    to="/login"
                  >
                    Login
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 my-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
