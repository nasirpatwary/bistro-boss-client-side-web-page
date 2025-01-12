import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import MenuCard from "../../components/MenuCard/MenuCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";

const ChefCategory = () => {
    const [menu, loading] = useMenu()
    const salad = menu.filter(salad => salad.category === "salad").slice(0, 3)
    if (loading) {
        return <LoadingSpinner />
    }
    return (
        <>
        <SectionTitle heading={"CHEF RECOMMENDS"} subHeading={"Should Try"} ></SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            {
                salad.map(item => <MenuCard
                    key={item?._id}
                    item={item}
                >
                </MenuCard>)
            }
        </div>
        </>
    );
};

export default ChefCategory;