import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import axios from "axios";
const TESTIMONIALS = () => {
    const [textImoni, setTextImoni] = useState([])
    useEffect(() => {
        textimoniData()
    }, [])
    const textimoniData = async() =>{
        try {
            const {data} = await axios(`${import.meta.env.VITE_SCRETE_URL}/reviews`)
            setTextImoni(data)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <section className="my-10 space-y-10">
            <SectionTitle heading={"TESTIMONIALS"} subHeading={"What Our Clients Say"} />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    textImoni.map(texti => <SwiperSlide key={texti?._id}>
                        <div className="mx-24 space-y-3">
                            <Rating
                                className="mx-auto"
                                style={{ maxWidth: 180 }}
                                value={texti?.rating}
                                readOnly
                            />

                           <div>
                           <p>{texti.details}</p>
                           <h4 className="text-orange-400 text-center text-xl">{texti.name}</h4>
                           </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default TESTIMONIALS;