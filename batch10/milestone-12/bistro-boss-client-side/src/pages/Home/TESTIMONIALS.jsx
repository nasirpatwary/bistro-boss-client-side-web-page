import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
const TESTIMONIALS = () => {
    const [textImoni, setTextImoni] = useState([])
    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => {
                setTextImoni(data)
            })
    }, [])
    console.log(textImoni);
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