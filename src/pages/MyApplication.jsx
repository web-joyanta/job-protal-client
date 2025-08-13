import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const MyApplication = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [user.email]);

    const handleDelete = (jobId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/jobs/${jobId}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            setJobs(jobs.filter(job => job._id !== jobId));
                        }
                    })

            }
        });
    }

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
                                        <button onClick={() => handleDelete(job.job_id)} className="btn btn-ghost btn-xs">Delete</button>
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