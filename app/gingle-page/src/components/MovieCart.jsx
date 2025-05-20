const movies = [
  {
    image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
  },
  {
    image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
  },
  {
    image: "https://image.tmdb.org/t/p/w500/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
  },
  {
    image: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
  },
  {
    image: "https://image.tmdb.org/t/p/w500/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
  },
];
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const MovieCart = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div className="relative mt-10">
        <div className="text-center my-10">
          <p className="text-[#e50914]">Films Tv---</p>
          <h2 className=" text-gray-300">Trending Now</h2>
        </div>
        {/* Custom Previous Button with Icon */}
        <button
          ref={prevRef}
          className="bg-[#e50914] p-2 cursor-pointer absolute left-0 top-2/3 transform -translate-y-1/2 z-10 rounded-full"
        >
          <FaArrowAltCircleRight />
        </button>

        {/* Custom Next Button with Icon */}
        <button
          ref={nextRef}
          className="bg-[#e50914] p-2 cursor-pointer absolute right-0 top-2/3 transform -translate-y-1/2 z-10 rounded-full"
        >
          <FaArrowAltCircleLeft />
        </button>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          speed={1500}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          loop
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <div>
                <img
                  className="h-70 object-cover object-center w-full"
                  src={movie.image}
                  alt="movie logo"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default MovieCart;
