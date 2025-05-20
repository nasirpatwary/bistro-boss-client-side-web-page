import Marquee from "react-fast-marquee";
import useAuth from "../hooks/useAuth";
import logo from "../assets/img.png";
const Banner = () => {
  const { user } = useAuth();
  return (
    <div className="text-center">
      {user?.email && (
        <Marquee speed={100} pauseOnHover gradient direction="left">
          <p className="text-white text-lg">
            Enjoy unlimited access to the latest movies, trending TV shows, and
            original series. Stream anytime, anywhere — no ads, no limits, just
            pure entertainment for film and TV lovers worldwide.
          </p>
        </Marquee>
      )}
      <div className="flex flex-col md:flex-row items-center gap-5  mt-10">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <div className="space-y-2.5">
            <h2 className="mt-2 text-xl bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
              Unlimited movies TV shows, and more.
            </h2>
            <p className="text-gray-300">
              Stream anytime, anywhere — no ads, no limits, just pure
              entertainment for film and TV lovers worldwide
            </p>
          </div>
          <a
            download
            href="/filmstv.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <button className="mt-4 px-4 py-2 cursor-pointer rounded bg-[#e50914] text-white">
              Downlad Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
