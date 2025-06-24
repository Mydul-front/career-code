import React, { Suspense } from "react";
import useAuth from "../hooks/useAuth";
import JobLists from "./jobLists";
import { jobsCreatedByPromise } from "../api/jobsApi.js/jobsApi";

const MyPostedJobs = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>My posted jobs: </h1>
      <Suspense>
        <JobLists
          jobsCreatedByPromise={jobsCreatedByPromise(user.email)}
        ></JobLists>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
