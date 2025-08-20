import { useLoaderData } from "react-router-dom";

const ViewApplications = () => {
    const applications = useLoaderData();
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
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((app, index) => <tr key={app._id}>
                            <th>{index + 1}</th>
                            <td>{app.applicant_email}</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;