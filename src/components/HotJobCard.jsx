import { CiLocationOn } from "react-icons/ci";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
    const { _id, company_logo, company, location, title, description, requirements, salaryRange } = job;
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="flex items-center gap-2 px-5 mt-5">
                <figure>
                    <img className="w-13"
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h4 className="text-xl font-medium">{company}</h4>
                    <p className="flex items-center gap-1"><CiLocationOn /> {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {
                        requirements.map((skill, index) => <p key={index} className="border rounded-lg bg-[#EFF3FC] hover:text-[#3C65F5] px-2">{skill}</p>)
                    }
                </div>
                <div className="flex items-center gap-2 mt-2">
                    <p className="flex items-center text-[15px] font-semibold"><BsCurrencyDollar />{salaryRange.min}-{salaryRange.max}/{salaryRange.currency}</p>
                    <Link to={`/jobs/${_id}`}>
                        <button className="btn btn-primary">Apply Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;