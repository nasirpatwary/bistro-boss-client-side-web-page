import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import logo from "../../assets/others/authentication2.png"
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
const Login = () => {
    const { signInUser } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const [disabled, setDisabled] = useState(true)
    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                Swal.fire({
                    position: "top-ceter",
                    icon: "success",
                    title: `Success Full ${user?.displayName}!`,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location?.state : "/")
            })
            .catch(error => console.log(error))
    }
    const handleBlur = e => {
        const captcha_value = e.target.value;
        if (validateCaptcha(captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }
    return (
        <div className="hero bg-authentication">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={logo} alt="" />
                </div>
                <div className="card w-full max-w-sm shrink-0">
                    <h1 className="text-2xl text-center mt-4 font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body pb-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleBlur} type="text" placeholder="type the captcha" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} className="btn btn-outline btn-success" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className="text-center text-[#d1a054]"><small>New here? <Link to="/signup" className="font-bold">Create a New Account</Link></small></p>
                    <SocialLogin social={"Or SignIn Social"}></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;