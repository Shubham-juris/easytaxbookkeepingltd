import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ job }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h2 className="text-4xl font-semibold text-black">{job.title}</h2>
          <p className="text-sm text-gray-500">Posted on {job.postedDate}</p>
        </div>
        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
          {job.workplace}
        </span>
      </div>

      <div className="text-sm text-gray-700 space-y-1 mb-4">
        <p><strong>Employer:</strong> {job.employer}</p>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Salary:</strong> {job.salary}</p>
        <p><strong>Type:</strong> {job.employmentType}</p>
        <p><strong>Vacancies:</strong> {job.vacancies}</p>
        <p><strong>Experience:</strong> {job.experience}</p>
        <p><strong>Start Date:</strong> {job.startDate}</p>
        <p><strong>Language:</strong> {job.language}</p>
        <p><strong>Education:</strong> {job.education}</p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-gray-800">Responsibilities</h3>
        <ul className="list-disc list-inside text-sm text-gray-600">
          {job.responsibilities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {job.benefits?.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800">Benefits</h3>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {job.benefits.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      <Link to="/Contactus">
      <button className="mt-4 w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition">
        Apply Now
      </button>
      </Link>
    </div>
  );
};

export default Post;
