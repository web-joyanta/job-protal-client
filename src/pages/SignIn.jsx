import Lottie from "lottie-react";
import loginLottieData from "../assets/Lottie/Login.json";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const SignIn = () => {
    const { singInUser } = useContext(AuthContext);
    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        singInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log("User signed in successfully:", user);
                form.reset();
            })
            .catch(error => {
                console.error("Error signing in user:", error);
                alert("Sign in failed. Please check your credentials and try again.");
            });

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie animationData={loginLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold">Sign In Now!</h1>
                    <form onSubmit={handleSignIn} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input name="email" type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name="password" type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Sign In</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;