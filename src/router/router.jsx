import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply";
import MyApplication from "../pages/MyApplication";
import AddJob from "../pages/AddJob";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <div>Page Not Found</div>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/jobs/:id",
                element: <PrivateRoute>
                    <JobDetails></JobDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
            },
            {
                path: "/jobApply/:id",
                element: <PrivateRoute>
                    <JobApply></JobApply>
                </PrivateRoute>
            },
            {
                path: "/myApplication",
                element: <PrivateRoute>
                    <MyApplication></MyApplication>
                </PrivateRoute>
            },
            {
                path: '/addJob',
                element: <PrivateRoute>
                    <AddJob></AddJob>
                </PrivateRoute>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>
            }
        ]
    },
]);

export default router;