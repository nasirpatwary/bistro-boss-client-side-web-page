import { Link } from "react-router-dom";
import SectionCover from "../../components/SectionCover/SectionCover";
import MenuItem from "../../components/MenuItem/MenuItem";

const MenuCategory = ({items, title, menuImg}) => {
    return (
        <>
        {title && <SectionCover
                title={title} subTitle={"Would you like to try a dish? Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}
                menuImg={menuImg}>
            </SectionCover> } 
        <div className="grid lg:grid-cols-2 gap-4 space-y-3 my-10">
           {
                items.map(item => <MenuItem
                    key={item?._id}
                    item={item}
                >
                </MenuItem>)
            } 
        </div>
        <div className="text-center my-10">
           <Link to={`/order/${title}`}> 
           <button className="btn btn-outline bg-[#e8e8e8] border-b-2 border-0 uppercase border-black text-black duration-700 px-5 hover:text-[#BB8506]">ORDER YOUR FAVOURITE FOOD</button>
           </Link>
        </div>
        </>
    );
};

export default MenuCategory;