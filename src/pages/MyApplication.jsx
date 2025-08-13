import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const MyApplication = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [user.email]);

    return (
        <div>
            <h2 className="text-2xl font-medium">My Application</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Deadline</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    {
                        jobs.map((job, index) => (
                            <tbody key={job._id}>
                                {/* row 1 */}
                                <tr>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={job.company_logo}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{job.company}</div>
                                                <div className="text-sm opacity-50">{job.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {job.title}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{job.description}</span>
                                    </td>
                                    <td>{job.applicationDeadline}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">Delete</button>
                                    </th>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
            </div>
        </div>
    );
};

export default MyApplication;