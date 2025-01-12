import { useEffect, useState } from "react";
import useAxios from "./useAxios";
const useMenu = () => {
    const axiosSecure = useAxios()
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
        menuData()
    },[])
    const menuData = async()=>{
        try {
            const {data} = await axiosSecure.get(`/menu`);
            setMenu(data)
            setLoading(false)
          } catch (error) {
            console.error(error);
          }
    }
    return [menu, loading]
};

export default useMenu;