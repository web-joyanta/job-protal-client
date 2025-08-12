import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const {_id,  title, description } = useLoaderData();
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={`/jobApply/${_id}`}>
                <button className="btn btn-primary">Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;