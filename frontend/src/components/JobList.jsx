import React from "react";
import JobCard from "./JobCard";

const JobList = ({ jobs }) => {
  if (!jobs.length) {
    return <p className="text-center text-gray-500">No jobs found.</p>;
  }

  return (
    <div className="p-4">
      {jobs.map((job, idx) => (
        <JobCard key={idx} job={job} />
      ))}
    </div>
  );
};

export default JobList;
