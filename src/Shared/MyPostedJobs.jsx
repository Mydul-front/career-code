import React, { Suspense } from "react";
import useAuth from "../hooks/useAuth";
import JobLists from "./jobLists";
import useJobApi from "../api/jobsApi.js/useJobApi";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const jobsCreatedByPromise = useJobApi();

  return (
    <div>
      <h1>My posted jobs: </h1>
      <Suspense>
        <JobLists
          jobsCreatedByPromise={jobsCreatedByPromise(
            user.email,
            user.accessToken
          )}
        ></JobLists>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
