import { Link } from "react-router-dom";
import MyCartTable from "../../components/MyCartTable/MyCartTable";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useCart from "../../hooks/useCart";

const MyCart = () => {
    const [cart] = useCart()
    const totalPrice = cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
    return (
        <>
            <div className="space-y-4">
                <SectionTitle heading={"WANNA ADD MORE?"} subHeading={"My Cart"}>

                </SectionTitle>
                <div className="flex justify-between">
                    <h4 className="uppercase md:text-2xl">Itmes: {cart.length}</h4>
                    <h4 className="md:text-2xl">Price: ${totalPrice}</h4>
                    {
                        cart.length ? <Link to="/dashboard/payment"><button className="btn btn-outline">PAY</button></Link>
                        :<button disabled className="btn btn-outline">PAY</button>
                    }
                </div>
            </div>
            <div>
                {
                    cart.length <= 0 ? <div className="min-h-[calc(100vh-260px)] flex flex-col items-center justify-center">
                        <p>No Data Foutnd</p>
                    </div>
                        :
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Acction</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.map((item, index) => <MyCartTable
                                            key={item?._id}
                                            item={item}
                                            index={index}
                                        ></MyCartTable>)
                                    }
                                </tbody>
                            </table>
                        </div>
                }
            </div>
        </>
    );
};

export default MyCart;