import logo from "../assets/filmstv.jpg";
import useAuth from "../hooks/useAuth";
const Navbar = () => {
  const { googleProvider, user, logOut } = useAuth();
  return (
    <>
      <nav>
        <div className="navbar fixed z-20 px-4 lg:px-28 shadow-sm">
          <div className="navbar-start gap-2">
            <a
              href="/app-debug.apk"
              onClick={(e) => {
                e.preventDefault();
                fetch("/app-debug.apk")
                  .then((res) => res.blob())
                  .then((blob) => {
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = "app-debug.apk";
                    a.click();
                    window.URL.revokeObjectURL(url);
                  })
                  .catch(handleDownloadError);
              }}
            >
              <img className="w-10 h-10 rounded-full" src={logo} alt="" />
            </a>
            <h2 className="text-[#e50914] text-xl cursor-pointer">Films Tv</h2>
          </div>
          <div className="navbar-end space-x-2">
            {user ? (
              <>
                <img
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
                <button
                  onClick={logOut}
                  className="cursor-pointer bg-[#e50914] rounded text-white py-1 px-4"
                >
                  LogOut
                </button>
              </>
            ) : (
              <button
                onClick={googleProvider}
                className="cursor-pointer bg-[#e50914] text-white py-1 rounded px-4"
              >
                SignIn
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
