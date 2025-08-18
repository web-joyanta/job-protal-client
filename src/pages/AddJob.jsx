import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const AddJob = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    console.log(user.displayName)

    const handleAddJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        const { min, max, currency, ...newJob } = data;
        newJob.salaryRange = { min, max, currency };
        newJob.requirements = newJob.requirements.split(",");
        newJob.responsibilities = newJob.responsibilities.split(",");

        fetch("http://localhost:5000/jobs", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Job Has been added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/myPostedJobs");
                }
            })
    }
    return (
        <div>
            <h2 className="text-2xl font-medium">Add a New Job</h2>
            <form onSubmit={handleAddJob} className="card-body">
                <fieldset className="fieldset">
                    {/* Company Name */}
                    <label className="label">Company</label>
                    <input type="text" name="company" placeholder="Company Name" className="input input-bordered w-full" required />
                    {/* Company Logo */}
                    <label className="label">Company Logo URL</label>
                    <input type="url" name="company_logo" placeholder="Enter company logo URL" className="input input-bordered w-full" required />
                    {/* title */}
                    <label className="label">Title</label>
                    <input type="text" name="title" className="input w-full" placeholder="Job Title" required />
                    {/* location */}
                    <label className="label">Location</label>
                    <input type="text" name="location" className="input w-full" placeholder="Job Location" required />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div>
                            {/* job type */}
                            <label className="label">Job Type</label>
                            <select name="jobType" className="select select-bordered w-full" required>
                                <option disabled={true}>Select job type</option>
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Contract">Contract</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>
                        <div>
                            {/* category */}
                            <label className="label">Category</label>
                            <select name="category" className="select select-bordered w-full" required>
                                <option disabled={true}>Select category</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Design">Design</option>
                                <option value="Finance">Finance</option>
                                <option value="Education">Education</option>
                                <option value="Development">Development</option>
                                <option value="Teaching">Teaching</option>
                                <option value="Management">Management</option>
                                <option value="Data Science">Data Science</option>
                            </select>
                        </div>
                        <div>
                            {/* Application Deadline */}
                            <label className="label">Deadline</label>
                            <input type="date" name="deadline" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    {/* Salary Range */}
                    <label className="label">Salary Range</label>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <input type="number" name="min" placeholder="Min Salary" className="input input-bordered w-full" required />
                        <input type="number" name="max" placeholder="Max Salary" className="input input-bordered w-full" required />
                        <select name="currency" className="select select-bordered w-full" required>
                            <option disabled={true}>Select currency</option>
                            <option value="bdt">BDT</option>
                            <option value="usd">USD</option>
                            <option value="eur">EUR</option>
                            <option value="inr">INR</option>
                        </select>
                    </div>
                    {/* hr email $ name */}
                    {
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                                <label className="label">Hire Name</label>
                                <input name="hr_name" className="input w-full" type="text" defaultValue={user.displayName} />
                            </div>
                            <div>
                                <label className="label">Hire Email</label>
                                <input name="hr_email" className="input w-full" type="text" defaultValue={user.email} />
                            </div>
                        </div>
                    }
                    {/*  */}
                    {/* Requirements &  Responsibilities*/}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            {/* Requirements */}
                            <label className="label">Requirements</label>
                            <textarea name="requirements" placeholder="Enter requirements, separated by commas" className="textarea textarea-bordered w-full h-24" required />
                        </div>
                        <div>
                            {/* Responsibilities */}
                            <label className="label">Responsibilities</label>
                            <textarea name="responsibilities" placeholder="Enter responsibilities, separated by commas" className="textarea textarea-bordered w-full h-24" required />
                        </div>
                    </div>
                    {/* Description */}
                    <label className="label">Description</label>
                    <textarea name="description" placeholder="Enter job description" className="textarea textarea-bordered w-full h-32" required />
                    <button className="btn btn-neutral mt-4">Add Job</button>
                </fieldset>
            </form>
        </div>
    );
};

export default AddJob;