import MenuCard from "../../components/MenuCard/MenuCard";

const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {
            items.map(item => <MenuCard key={item?._id} item={item}></MenuCard>)
        }
    </div>
    );
};

export default OrderTab;