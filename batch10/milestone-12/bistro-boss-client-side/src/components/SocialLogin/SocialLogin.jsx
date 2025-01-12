import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const SocialLogin = ({ social }) => {
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const location = useLocation()
    const { googleSignIn } = useAuth()
    const handleGoogle = () => {
        googleSignIn()
            .then(async result => {
                console.log("Google SignIn Success", result.user);
                const user = result?.user
                const userInfo = {
                    name: user?.displayName,
                    email: user?.email
                }
                console.log(userInfo.name, userInfo.email);
                try {
                    const {data} = await axiosPublic.post("/users", userInfo)
                    if (data) {
                        navigate(location.state ? location.state : "/")
                    }
                } catch (error) {
                    console.log(error);
                }
                    
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="text-center space-y-2 my-2">
            <p>{social}</p>
            <button className="w-80 border-[#d1a054] mx-auto gap-2 flex justify-center items-center rounded-md border px-2 py-2" onClick={handleGoogle}>SignIn Google<FcGoogle size={22} /></button>
        </div>
    );
};

export default SocialLogin;