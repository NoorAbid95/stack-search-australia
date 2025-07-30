import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="border rounded shadow p-4 mb-4">
      <h2 className="text-xl font-semibold">{job.jobTitle}</h2>
      <p className="text-gray-600">
        {job.companyName} — {job.location}
      </p>
      <p className="text-sm my-2">{job.description.slice(0, 200)}...</p>
      <p className="font-medium">Salary: {job.salaryRange}</p>
      <a
        href={job.redirectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline mt-2 inline-block"
      >
        View Job Posting
      </a>
    </div>
  );
};

export default JobCard;
