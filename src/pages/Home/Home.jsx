import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';
const jobsPromise = fetch("http://localhost:5000/jobs").then((res) =>
  res.json()
);
const Home = () => {
     
     return (
       <div>
         <Banner></Banner>
         <Suspense fallback={'Loading hot jobs........'}>
           <HotJobs jobsPromise={jobsPromise}></HotJobs>
         </Suspense>
       </div>
     );
};

export default Home;