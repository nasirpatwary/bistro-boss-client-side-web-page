import { useState } from "react";
import orderImg from "../../../assets/shop/banner2.jpg"
import SectionCover from "../../../components/SectionCover/SectionCover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab";
import { useParams } from "react-router-dom";
const Order = () => {
    const categories = ["salad", "pizza", "soup", "dessert", "drinks"]
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu()
    const salad = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")
    const soup = menu.filter(item => item.category === "soup")
    const dessert = menu.filter(item => item.category === "dessert")
    const drinks = menu.filter(item => item.category === "drinks")
    return (
        <div>
            <div>
                <SectionCover menuImg={orderImg} title={"our Food"} subTitle={"Would you like to try a dish? Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}></SectionCover>
            </div>
            <div className="my-10">       
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                {/* salad item */}
                <TabPanel>
                <OrderTab items={salad}></OrderTab>
                </TabPanel>
                {/* pizza item */}
                <TabPanel>
                <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                {/* soup item */}
                <TabPanel>
                <OrderTab items={soup}></OrderTab>
                </TabPanel>
                {/* dessert item */}
                <TabPanel>
                <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                {/* drinks item */}
                <TabPanel>
                <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default Order;