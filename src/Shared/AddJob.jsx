import React from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = useAuth();
  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };
    // process requirements

    const requirementsString = newJob.requirements;
    const requirementsDirty = requirementsString.split(",");
    const requirementsClean = requirementsDirty.map((req) => req.trim());
    newJob.requirements = requirementsClean;
    console.log(requirementsClean, requirementsDirty);

    // responsibilities
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((res) => res.trim());
    newJob.status = "active";

    console.log(newJob);
    // save job to the database
    axios
      .post("http://localhost:5000/jobs", newJob)
      .then((res) => {
        console.log(res.data);
        if(res.data.insertedId){
          Swal.fire({
            position:'top',
            icon:'success',
            title:'your post is successfully',
            showConfirmButton:false,
            timer:2000
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="container mx-auto m-6">
      <h2 className="text-5xl font-extrabold">Please add a job</h2>
      <form onSubmit={handleAddJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend mt-6 text-3xl">Basic Info</legend>

          <label className="label">title</label>
          <input
            type="text"
            name="title"
            className="input"
            placeholder="job title"
          />

          <label className="label">company</label>
          <input
            type="text"
            name="company"
            className="input"
            placeholder="company name"
          />

          <label className="label">location</label>
          <input
            type="text"
            name="location"
            className="input"
            placeholder="company location"
          />
          <label className="label">company logo</label>
          <input
            type="url"
            name="location"
            className="input"
            placeholder="company logo"
          />
        </fieldset>
        {/* Job Responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend"> Job Responsibilities</legend>
          <textarea
            className="textarea textarea-ghost"
            name="responsibilities"
            placeholder="Job Responsibilities"
          ></textarea>
        </fieldset>
        {/* Job Requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend"> Job Requirements</legend>
          <textarea
            className="textarea textarea-ghost"
            name="requirements"
            placeholder="job Requirements(separate  by comma)"
          ></textarea>
        </fieldset>

        {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="space-x-3">
              <label className="label">Minimum Salary</label>
              <input
                type="text"
                name="min"
                className="input"
                placeholder="Minimum Salary"
              />
            </div>

            <div className="space-x-3">
              <label className="label">Maximum Salary</label>
              <input
                type="text"
                name="max"
                className="input"
                placeholder="Maximum Salary"
              />
            </div>

            <div className="space-x-3">
              <label className="label">Currency</label>
              <select
                defaultValue="Select a currency"
                name="currency"
                className="select"
              >
                <option disabled={true}>Select a currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>EU</option>
              </select>
            </div>
          </div>
        </fieldset>
        {/* Application DateLine*/}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Application DateLine</legend>
          <input type="date" name="dateLine" className="input" />
        </fieldset>
        {/* job category*/}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Category</legend>
          <select defaultValue="Job Category" className="select">
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Sales</option>
          </select>
        </fieldset>
        {/* job type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Type</legend>

          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="On-site"
              aria-label="On-site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Remote"
              aria-label="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Hybrid"
              aria-label="Hybrid"
            />
          </div>
          {/* job description */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <legend className="fieldset-legend">Job Description</legend>
            <textarea
              className="textarea textarea-ghost"
              name="description"
              placeholder="Bio"
            ></textarea>
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <legend className="fieldset-legend">HR Related Info</legend>

            <label className="label">HR NAME</label>
            <input
              type="text"
              name="hr_name"
              className="input"
              placeholder="hr name"
            />

            <label className="label">HR EMAIL</label>
            <input
              type="email"
              name="hr_email"
              className="input"
              defaultValue={user.email}
              placeholder="hr email"
            />
          </fieldset>
        </fieldset>
        <input type="submit" className="btn btn-accent" value="Add Job" />
      </form>
    </div>
  );
};

export default AddJob;
