const AddJob = () => {
    return (
        <div>
            <h2 className="text-2xl font-medium">Add a New Job</h2>
            <form className="card-body">
                <fieldset className="fieldset">
                    {/* Company Name */}
                    <label className="label">Company</label>
                    <input type="text" name="company" placeholder="Company Name" className="input input-bordered w-full" required />
                    {/* Company Logo */}
                    <label className="label">Company Logo URL</label>
                    <input type="url" name="companyLogo" placeholder="Enter company logo URL" className="input input-bordered w-full" required />
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