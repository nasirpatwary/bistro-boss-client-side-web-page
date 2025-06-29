import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import useCart from "../../hooks/useCart";
const SSLPayment = () => {
    const {user} = useAuth()
    const [cart] = useCart()
    const axiosSecure = useAxios()
    const totalPrice = cart.reduce((prv, total) => prv + total.price, 0)
    const handleSSLPayment = async () => {
    const payment = {
        email: user?.email,
        price: totalPrice,
        transactionId: "",
        date: new Date(),
        cartIds: cart.map(item => item._id),
        menuIds: cart.map(item => item.menuId),
        status: "pending"
    }
    const {data} = await axiosSecure.post("/create-ssl-payment", payment)
    console.log(data);
    if(data.gatewayUrl){
        window.location.replace(data.gatewayUrl)
    }
    }
    return (
        <div className="bg-gray-100 p-10 space-y-2">
            <h2 className="text-2xl">Payment Details</h2>
            <p>Complete your order by providing your payment details</p>
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text">Email</span>
                </div>
                <input defaultValue={`@  ${user?.email}`} type="text" placeholder="Type here" className="input input-bordered w-full" />
            </label>
            <button onClick={handleSSLPayment} className="btn btn-outline btn-accent w-full">Place Order</button>
        </div>
    );
};

export default SSLPayment;