import React, { Suspense } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import useAuth from "../../hooks/useAuth";
import useApplicationApi from "../../api/jobsApi.js/useApplicationApi";


const MyApplications = () => {
  const { user } = useAuth();
  const {myApplicationsPromise}=useApplicationApi();

  console.log("user context token", user.accessToken);
  return (
    <div>
      <ApplicationStats></ApplicationStats>
      <Suspense fallback={"Loading your application..."}>
        <ApplicationList
          myApplicationsPromise={myApplicationsPromise(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
