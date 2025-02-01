import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import moment from "moment";

const PaymentHistory = () => {
    const axiosSecure = useAxios()
    const { user } = useAuth()
    const { data: payments = [], refetch } = useQuery({
        queryKey: ["paymentHistory", user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure(`/payment/shistory/${user?.email}`)
            return data
        }
    })
    return (
        <div>
            <SectionTitle heading={"Payment History"} subHeading={"At a Glance!"} />
            <div>
                {payments && payments.length <= 0 ? <div className="min-h-[calc(100vh-260px)] flex flex-col items-center justify-center">No Data Pound</div>
                    :
                    <div className="overflow-x-auto">
                        <p className="text-center mt-4 text-2xl">Total Payments: {payments?.length}</p>
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Email</th>
                                    <th>Categgory</th>
                                    <th>Total Price</th>
                                    <th>Status</th>
                                    <th>Payment Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {payments?.map((history, i) => <tr key={history?._id}>
                                    <th>{i + 1}</th>
                                    <td className="whitespace-nowrap">{history?.email}</td>
                                    <td>{history?.category? history?.category?.charAt(0).toUpperCase() + history?.category?.slice(1): "No Category"}</td>
                                    <td>{history?.price}</td>
                                    <td><button className={history.status === "pending" ? "bg-red-100 p-0.5 rounded" : history.status === "success" ? "bg-green-200 p-0.5 rounded" : undefined}>{history.status}</button></td>
                                    <td className="whitespace-nowrap">{moment(history.date).format('dddd, MMMM D, YYYY')}</td>
                                </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </div>
    );
};

export default PaymentHistory;