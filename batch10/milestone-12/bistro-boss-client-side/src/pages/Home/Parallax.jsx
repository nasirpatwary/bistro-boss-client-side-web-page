import moment from "moment";
import parallax from "../../assets/home/featured.jpg"
import SectionTitle from "../../components/SectionTitle/SectionTitle";
const Parallax = () => {
    return (
        <>
            <div className="bg-parallax bg-fixed bg-cover text-white">
               <div className="pt-10 bg-black/30">
               <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"} />
               </div>
                <div className="flex flex-col md:flex-row gap-5 justify-between bg-black/30 md:p-10 lg:p-20">
                    <div>
                        <img className="md:w-[400px] mx-auto px-10 pt-10 lg:pt-0" src={parallax} alt="" />
                    </div>
                    <div className="md:w-[400px] space-y-2 md:px-0 md:py-0 px-10 py-4">
                        <h3 className="uppercase">{moment().format("MMMM YYYY, h:mm:ss a")}</h3>
                        <h2 className="uppercase">Where can get some?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores saepe possimus vitae, ipsum culpa sed earum distinctio cumque! Enim, libero?</p>
                        <button className="uppercase btn btn-outline border-white text-white border-0 border-b-2 px-5">Read More</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Parallax;