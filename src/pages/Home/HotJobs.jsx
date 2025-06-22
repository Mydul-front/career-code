import React, { use } from 'react';
import JobCard from '../../Shared/JobCard';

const HotJobs = ({jobsPromise}) => {
     const jobs=use(jobsPromise);
     console.log(jobs);
     return (
          <div>
               {
                    jobs.map(job=> <JobCard key={job._id} job={job}></JobCard>)
               }
          </div>
     );
};

export default HotJobs;