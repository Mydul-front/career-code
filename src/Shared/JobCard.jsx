import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    title, _id,
    location,
    description,
    salaryRange,
    requirements,
    company,
    company_logo,
  } = job;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="flex gap-2 ">
        <figure>
          <img className="w-16" src={company_logo} alt="logo" />
        </figure>
        <div>
          <h3 className="text-3xl font-bold">{company}</h3>
          <p className="text-xl flex items-center gap-2 font-semibold">
            <FaMapMarkerAlt />
            {location}
          </p>
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="flex items-center font-extrabold gap-2">
          Selary: {salaryRange.min}-{salaryRange.max} {salaryRange.currency}{" "}
        </p>
        <p>{description}</p>
        <div className="card-actions">
          {requirements.map((skill, index) => (
            <div key={index} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
          <Link to={`/jobs/${job._id}`}>
            <button className="btn btn-primary text-2xl font-bold">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
