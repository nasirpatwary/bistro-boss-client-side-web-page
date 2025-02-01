import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY_PK_LOADSTRIPE)
const Payment = () => {
    return (
        <div>
            <SectionTitle heading={"Payment"} subHeading="Please You Can do it" />
            {/* <div className="flex mt-4 flex-col md:flex-row items-center gap-5 justify-between">
                <input type="number" placeholder="Recipe Price" className="input input-bordered w-full" />
                <input type="number" placeholder="Recipe Price" className="input input-bordered w-full" />
            </div> */}
            <div>
                <Elements stripe={stripePromise}>
                    {/* component CheckOut */}
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;