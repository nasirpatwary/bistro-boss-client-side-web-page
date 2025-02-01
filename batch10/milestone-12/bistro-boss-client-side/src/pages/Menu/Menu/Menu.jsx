import { Helmet } from "react-helmet-async";

import menuImg1 from "../../../assets/menu/banner3.jpg"
import menuImg2 from "../../../assets/menu/dessert-bg.jpeg"
import menuImg3 from "../../../assets/menu/pizza-bg.jpg"
import menuImg4 from "../../../assets/menu/soup-bg.jpg"
import menuImg5 from "../../../assets/menu/salad-bg.jpg"
import MenuCategory from "../MenuCategory";
import SectionCover from "../../../components/SectionCover/SectionCover";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(items => items.category === "offered")
    const dessert = menu.filter(items => items.category === "dessert")
    const pizza = menu.filter(items => items.category === "pizza")
    const soup = menu.filter(items => items.category === "soup")
    const salad = menu.filter(items => items.category === "salad")
    return (
        <>
            <Helmet>
                <title>Menu Our</title>
            </Helmet>
            <SectionCover
                title={"OUR MENU"} subTitle={"Would you like to try a dish? Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}
                menuImg={menuImg1}>
            </SectionCover>
            {/* mian cover */}
            <div className="my-10">
            <SectionTitle heading={"Dont' Miss"} subHeading={"Today's"}></SectionTitle>
            </div>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} title={"dessert"} menuImg={menuImg2}></MenuCategory>
            <MenuCategory items={pizza} title={"pizza"} menuImg={menuImg3}></MenuCategory>
            <MenuCategory items={soup} title={"soup"} menuImg={menuImg4}></MenuCategory>
            <MenuCategory items={salad} title={"salad"} menuImg={menuImg5}></MenuCategory>
        </>
    );
};

export default Menu;