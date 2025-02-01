import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from 'react';
import useCart from "../../hooks/useCart";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
    const [cart, , , refetch] = useCart();
    const { user } = useAuth();
    const navigate = useNavigate()
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxios();
    const [error, setError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [transationId, setTransationId] = useState("");
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    useEffect(() => {
        savePaymentIntent()
    }, [axiosSecure, totalPrice])
    const savePaymentIntent = async () => {
        if (totalPrice > 0 ) {
            const { data } = await axiosSecure.post("/create-payment-intent", { price: totalPrice })
            setClientSecret(data.clientSecret)
        }
    }
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        if (!stripe || !elements) return

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);
        if (card === null) return

        const { error: err, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if (err) {
            console.log('payment error', err);
            setError(err.message)
        } else {
            console.log('PaymentMethod', paymentMethod);
            setError("")
        }
        const { paymentIntent, error: confirmErr } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "anonymous",
                    name: user?.displayName || "anonymous"
                }
            }
        })
        if (confirmErr) {
            console.log("confirm error", confirmErr);
        }
        else {
            console.log("paymentIntent", paymentIntent);
            if (paymentIntent.status === "succeeded") {
                console.log("transation id", paymentIntent.id);
                setTransationId(paymentIntent.id)
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    category: cart[0]?.category && cart[0]?.category,
                    date: new Date(), // utc date convert use moment.js to
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: "pending",
                    transationId: paymentIntent.id
                }
                const { data } = await axiosSecure.post("/payments", payment)
                console.log("payment successful", data);
                refetch()
                navigate("/dashboard/paymentHistory")
                if (data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-sm btn-outline mt-2" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="text-red-500"> {error}</p>
                {
                    transationId && <p className="text-green-500"> your transation id: {transationId}</p>
                }
            </form>
        </div>
    );
};

export default CheckOutForm;