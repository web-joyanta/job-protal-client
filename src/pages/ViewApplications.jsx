import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
    const applications = useLoaderData();
    const handleStatusChange = (e, id) => {
        const data = {
            status: e.target.value
        };
        fetch(`http://localhost:5000/job-applications/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Status has been updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
        // Here you can add the logic to update the status in the backend
        // For example, you might want to send a PUT request to update the application status
    }
    return (
        <div>
            <h2 className="text-2xl font-medium mb-2">View Applications: {applications.length}</h2>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Update Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((app, index) => <tr key={app._id}>
                                <th>{index + 1}</th>
                                <td>{app.applicant_email}</td>
                                <td>Quality Control Specialist</td>
                                <td>
                                    <select onChange={(e) => handleStatusChange(e, app._id)} defaultValue={app.status || 'Change Status'} className="select select-bordered  select-xs w-full max-w-xs">
                                        <option disabled={true}>Change Status</option>
                                        <option>Hired</option>
                                        <option>Set Interview</option>
                                        <option>Under Review</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;