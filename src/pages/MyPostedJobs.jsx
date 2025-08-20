import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

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
            <h1 className="text-2xl font-medium mb-2">My Posted Job {jobs.length}</h1>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Deadline</th>
                            <th>Application Count</th>
                            <th>Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job, index) => <tr key={job._id}>
                                <th>{index + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.deadline}</td>
                                <td>{job.applicationCount}</td>
                                <td>
                                    <Link to={`/viewApplications/jobs/${job._id}`}>
                                        <button className="btn btn-link">View Application</button>
                                    </Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJob;