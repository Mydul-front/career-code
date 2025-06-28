export const jobsCreatedByPromise = (email, accessToken) => {
  return fetch(
    `http://localhost:5000/jobs/applications?email=${email}`,
    {
      headers:{
        authorization:`Bearer ${accessToken}`,
      }
    }
  ).then((res) => res.json());
};
