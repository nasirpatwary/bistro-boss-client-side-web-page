import Cover from "../../components/Cover/Cover";
const Catagory = () => {
    return (
        <div className="hero mb-10 md:h-[300px] bg-chef bg-cover">
        <div className="hero-overlay"></div>
        <div className="hero-content text-black text-center">
            <Cover 
            heading={"Bistro Boss"} 
            subHeading={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."}
            />
        </div>
      </div>
    );
};

export default Catagory;