import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_SCRETE_URL
})
const useAxios = () => {
  const navigate = useNavigate()
  const { signOutUser } = useAuth()
  axiosSecure.interceptors.request.use((config) => {
    // Do something before request is sent
    const token = localStorage.getItem("access-token")
    console.log("interceptors.request ---->", token);
    config.headers.authorization = `Bearer ${token}`
    return config;
  }, (error) => {
    // Do something with request error
    return Promise.reject(error);
  });

  axiosSecure.interceptors.response.use((response) => {
    return response;
  }, async (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error) {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        await signOutUser()
        navigate("/login")
      }
    }
    return Promise.reject(error);
  });
  return axiosSecure
};

export default useAxios;