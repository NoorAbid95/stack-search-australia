import React from "react";

const JobDetailModal = ({ job, onClose }) => {
  if (!job) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-2">{job.jobTitle}</h2>
        <p className="text-gray-700 text-sm mb-1">
          <strong>Company:</strong> {job.companyName || "Unknown"}
        </p>
        <p className="text-gray-700 text-sm mb-1">
          <strong>Location:</strong> {job.location || "Unknown"}
        </p>
        <p className="text-gray-700 text-sm mb-1">
          <strong>Salary:</strong> {job.salaryRange || "Not specified"}
        </p>
        <p className="text-gray-600 mt-2 whitespace-pre-line">
          {job.description}
        </p>
        <a
          href={job.redirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-600 underline cursor-pointer"
        >
          Go to job post
        </a>
      </div>
    </div>
  );
};

export default JobDetailModal;
