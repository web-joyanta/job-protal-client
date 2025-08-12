import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();

    const summitJobApplication = e => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;

        const jobApplications = {
            job_id: id,
            applicant_email: user.email,
            linkedin,
            github,
            resume,
        }
        console.log(jobApplications)

    }
    return (

        <div className="card bg-base-100 w-full shadow-2xl">
            <h1 className="text-5xl font-bold text-center">Apply Job and Good Luck!</h1>
            <form onSubmit={summitJobApplication} className="card-body">
                <fieldset className="fieldset">
                    <label className="label">LinkedIn URL</label>
                    <input name="linkedin" type="url" className="input w-full" placeholder="LinkedIn URL" />
                    <label className="label">Github URL</label>
                    <input name="github" type="url" className="input w-full" placeholder="Github URL" />
                    <label className="label">Resume URL</label>
                    <input name="resume" type="url" className="input w-full" placeholder="Resume URL" />
                    <button className="btn btn-neutral mt-4">Apply</button>
                </fieldset>
            </form>
        </div>
    );
};

export default JobApply;