import axios from "axios";
const axiosPublic = axios.create({
    baseURL: import.meta.env.VITE_SCRETE_URL
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;