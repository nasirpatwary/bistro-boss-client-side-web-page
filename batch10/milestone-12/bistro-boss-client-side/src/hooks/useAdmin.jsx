import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useAdmin = () => {
    const {user, loading} = useAuth()
    const axiosSecure = useAxios()
    const {data: isAdmin, isLoading} = useQuery({
        queryKey:[user?.email, "isAdmin"],
        enabled: !loading,
        queryFn: async ()=>{
            const {data} = await axiosSecure.get(`/user/admin/${user?.email}`)
            return data?.admin
        }
    })
    return [isAdmin, isLoading]
};

export default useAdmin;