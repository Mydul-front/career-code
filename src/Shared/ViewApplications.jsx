import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();
  console.log(applications);
  const handleStatusChange = (e, app_id) => {
    console.log(e.target.value, app_id);

    axios
      .patch(`http://localhost:5000/applications/${app_id}`, {
        status: e.target.value,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <h2 className="text-4xl">
        {applications.length}Application for: {job_id}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
              <th>FStatus</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <tr key={application._id}>
                <th>{index + 1}</th>
                <td>{application.applicant}</td>
                <td>Quality Control Specialist</td>
                <td>
                  <select
                    onChange={(e) => handleStatusChange(e, application._id)}
                    defaultValue={application.status}
                    className="select"
                  >
                    <option disabled={true}>Update Status</option>
                    <option>Under Reviews</option>
                    <option>Call for interview</option>
                    <option>Hired</option>
                    <option>Pending</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
