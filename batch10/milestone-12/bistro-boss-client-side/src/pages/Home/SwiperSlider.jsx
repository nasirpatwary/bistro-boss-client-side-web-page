import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slider1 from "../../assets/home/slide1.jpg"
import slider2 from "../../assets/home/slide2.jpg"
import slider3 from "../../assets/home/slide3.jpg"
import slider4 from "../../assets/home/slide4.jpg"
import slider5 from "../../assets/home/slide5.jpg"
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const SwiperSlider = () => {
  return (
    <>
      <section>
        <SectionTitle
          subHeading={"From 11:00am to 10:00pm"}
          heading={"ORDER ONLINE"}>
        </SectionTitle>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-10"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h4 className='text-center md:text-xl uppercase -mt-8 md:-mt-16 text-white shadow'>Salads</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h4 className='text-center md:text-xl uppercase -mt-8 md:-mt-16 text-white shadow'>Pizzas</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h4 className='text-center md:text-xl uppercase -mt-8 md:-mt-16 text-white shadow'>Soups</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h4 className='text-center md:text-xl uppercase -mt-8 md:-mt-16 text-white shadow'>Desserts</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h4 className='text-center md:text-xl uppercase -mt-8 md:-mt-16 text-white shadow'>Salads</h4>
        </SwiperSlide>
        
      </Swiper>
      </section>
    </>
  );
};

export default SwiperSlider;