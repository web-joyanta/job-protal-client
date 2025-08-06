import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const SocialLogin = () => {
    const { singInWithGoogle } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        singInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log("User signed in with Google:", user);
            })
            .catch(error => {
                console.error("Error signing in with Google:", error);
            });
    }
    return (
        <div className="card-body">
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn">Google</button>
        </div>
    );
};

export default SocialLogin;