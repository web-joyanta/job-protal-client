import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const MyPostedJob = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [user.email]);

    return (
        <div>
            <h1>My Posted Job {jobs.length}</h1>
        </div>
    );
};

export default MyPostedJob;