import { Helmet } from "react-helmet-async";
import Banner from "../Banner";
import Catagory from "../Catagory";
import ChefCategory from "../ChefCategory";
import Parallax from "../Parallax";
import PopularMenu from "../PopularMenu";
import SwiperSlider from "../SwiperSlider";
import TESTIMONIALS from "../TESTIMONIALS";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Banner />
      <div className="w-11/12 lg:w-10/12 mx-auto my-10">
        <SwiperSlider />
        <Catagory />
        <PopularMenu />
        <ChefCategory />
        <Parallax />
        <TESTIMONIALS />
      </div>
    </div>
  );
};

export default Home;
