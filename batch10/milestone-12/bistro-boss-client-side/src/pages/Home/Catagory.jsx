import CategoryTitle from "../../components/CategoryTitle/CategoryTitle";

const Catagory = () => {
    return (
        <div className="hero mb-10 md:h-[280px] bg-fixed bg-chef bg-center">
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
            <CategoryTitle 
            heading={"Bistro Boss"} 
            subHeading={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."}
            />
        </div>
      </div>
    );
};

export default Catagory;