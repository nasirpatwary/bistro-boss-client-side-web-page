import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/others/authentication2.png"
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
const SignUp = () => {
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const { createUser, updateUserProfile } = useAuth()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user);
                updateUserProfile(data.name, data.profile)
                    .then(async () => {
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        try {
                            const { data } = await axiosPublic.post("/users", userInfo)
                            if (data.insertedId) {
                                reset()
                                console.log("update success full");
                                Swal.fire({
                                    position: "top-ceter",
                                    icon: "success",
                                    title: `Success Full ${user?.displayName}!`,
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate("/")
                            }
                        } catch (error) {
                            console.log(error);
                        }

                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                if (error) return toast.error("auth email-already-in-use please log in or use a different email.")
            })

    }
    return (
        <div className="hero bg-authentication">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={logo} alt="" />
                </div>
                <div className="card w-full max-w-sm shrink-0 border rounded">
                    <h1 className="text-2xl text-center mt-4 font-bold">Sign Up now!</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Enter Your Name" className="input input-bordered border w-full rounded" />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Profile</span>
                            </label>
                            <input type="text" {...register("profile", { required: true })} placeholder="Your Profile url..." className="input input-bordered border w-full rounded" />
                            {errors.profile && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered border w-full rounded" />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                        <div>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 25,
                                pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s)/
                            })} placeholder="password" className="input input-bordered border w-full rounded" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                            {errors.password?.type === "required" && <span className="text-red-500">password is required</span>}
                            {errors.password?.type === "minLength" && <span className="text-red-500">password much be 6 characters</span>}
                            {errors.password?.type === "maxLength" && <span className="text-red-500">password much be lesten 18  characters</span>}
                            {errors.password?.type === "pattern" && <span className="text-red-500">password at least one lowercase  one uppercase one number and one special character</span>}
                        </div>
                        <div className="form-control input input-bordered border w-full rounded">
                            <input className=" text-[#d1a054]" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className="text-center text-[#d1a054]"><small>Already registered? <Link to="/login" className="font-bold">Go to log in</Link></small></p>
                    <SocialLogin social={"Or SingUp Social"}></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;