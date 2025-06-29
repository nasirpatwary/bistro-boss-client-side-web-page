import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";
const useCart = () => {
    const { user } = useAuth()
    const axiosSecure = useAxios()
    const { isPending, error, data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/cart?email=${user?.email}`)
            return data
        }
    })
    return [cart, isPending, error, refetch]
};

export default useCart;