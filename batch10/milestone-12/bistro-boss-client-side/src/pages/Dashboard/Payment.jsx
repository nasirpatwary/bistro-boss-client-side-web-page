import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import SSLPayment from "./SSLPayment";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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
                    <Tabs>
                        <TabList>
                            <Tab>Stripe</Tab>
                            <Tab>SSL Commerze</Tab>
                        </TabList>

                        <TabPanel>
                            <CheckOutForm></CheckOutForm>
                        </TabPanel>
                        <TabPanel>
                            <SSLPayment></SSLPayment>
                        </TabPanel>
                    </Tabs>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;