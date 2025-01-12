import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../../components/MenuItem/MenuItem";
import useMenu from "../../hooks/useMenu";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const PopularMenu = () => {
    const [menu,loading] = useMenu()
    const popular = menu.filter(item => item.category === "popular")
    if (loading) {
        return <LoadingSpinner />
    }
    return (
        <section>
         <SectionTitle
         heading={"FROM OUR MENU"}
         subHeading={"Check it out"}
         />
        <div className="grid lg:grid-cols-2 gap-4 my-10">
            {
                popular.map(popular => <MenuItem key={popular._id} item={popular}></MenuItem>)
            }
        </div>
         <div className="text-center mb-10">
            <button className="btn btn-outline border-black border-0 px-5 border-b-2">View Full Menu</button>
         </div>
        </section>
    );
};

export default PopularMenu;