import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const {title} = useLoaderData();
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

export default JobDetails;