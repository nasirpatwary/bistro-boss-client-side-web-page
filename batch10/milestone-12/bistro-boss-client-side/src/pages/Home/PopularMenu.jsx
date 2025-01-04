import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../../components/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() =>{
        fetch("menu.json")
        .then(res => res.json())
        .then(data => {
            setMenu(data)
        })
    },[])
    return (
        <section>
         <SectionTitle
         heading={"FROM OUR MENU"}
         subHeading={"Check it out"}
         />
        <div className="grid lg:grid-cols-2 gap-4 my-10">
            {
                menu.filter(item => item.category === "popular").map(popular => <MenuItem key={popular._id} popular={popular}></MenuItem>)
            }
        </div>
         <div className="text-center mb-10">
            <button className="btn btn-outline border-black border-0 px-5 border-b-2">View Full Menu</button>
         </div>
        </section>
    );
};

export default PopularMenu;