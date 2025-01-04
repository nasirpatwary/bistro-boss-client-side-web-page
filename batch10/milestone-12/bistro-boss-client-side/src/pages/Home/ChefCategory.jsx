import { useEffect, useState } from "react";
import MenuCard from "../../components/MenuCard/MenuCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const ChefCategory = () => {
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                setChefs(data)
            })
    }, [])
    return (
        <setion>
        <SectionTitle heading={"CHEF RECOMMENDS"} subHeading={"Should Try"} ></SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            {
                chefs.filter(salad => salad.category === "salad").slice(0, 3).map(item => <MenuCard
                    key={item?._id}
                    item={item}
                >
                </MenuCard>)
            }
        </div>
        </setion>
    );
};

export default ChefCategory;