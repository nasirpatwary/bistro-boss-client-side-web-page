import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
const useMenu = () => {
    const axiosPublic = useAxiosPublic()
    const {data: menu = [], refetch, isLoading, isError } = useQuery({
      queryKey:["menu"],
      queryFn: async () => {
      const {data} = await axiosPublic.get("/menu")
      return data
      }
    })
   
    return [menu, isLoading, isError, refetch]
};

export default useMenu;