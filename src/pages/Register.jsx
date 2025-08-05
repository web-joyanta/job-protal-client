import Lottie from "lottie-react";
import registerLottieData from "../assets/Lottie/register.json";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // Basic validation for password
        const regex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
        if (!regex.test(password)) {
            alert("Password must be at least 6 characters, with 1 uppercase and 1 number.");
            return;
        };

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log("User registered successfully:", user);
            form.reset();
        })
        .catch(error => {
            console.error("Error registering user:", error);
            alert("Registration failed. Please try again.");
        });
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie animationData={registerLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input name="email" type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name="password" type="password" className="input" placeholder="Password" />
                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;