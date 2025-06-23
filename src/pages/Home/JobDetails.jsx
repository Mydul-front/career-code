import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const {_id, title, company } = useLoaderData();
  return (
    <div className="my-5 text-center space-y-3">
      <h2 className="text-4xl font-extrabold">{title}</h2>
      <p className="text-2xl font-bold">{company}</p>
      <Link to={`/jobApply/${_id}`}>
        <button className="btn btn-primary">Apply Now</button>
      </Link>
    </div>
  );
};

export default JobDetails;
