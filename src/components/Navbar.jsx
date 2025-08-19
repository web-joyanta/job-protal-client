import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import logo from "../../src/assets/logo.png"

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log("User signed out successfully");
            })
            .catch(error => {
                console.error("Error signing out:", error);
                alert("Sign out failed. Please try again.");
            });
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/myApplication">My Application</NavLink></li>
        <li><NavLink to="/addJob">Add Job</NavLink></li>
        <li><NavLink to="/myPostedJobs">My Posted Jobs</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">
                       <img className="w-10" src={logo} alt="nav logo" />
                        <span className="text-xl font-bold">Job Portal</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <button onClick={handleSignOut} className="btn">Sign Out</button> :
                    <>
                        <Link to="/register">Register</Link>
                        <Link className="btn" to="/signin">Sign In</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;