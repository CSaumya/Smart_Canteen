import React from "react";
import { useNavigate } from "react-router-dom";

const Students = ({ students }) => {
    console.log("Students prop:", students);
    
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Students</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.isArray(students) && students.map((student) => (
          <div
            key={student.id}
            className="border p-4 rounded shadow hover:shadow-md flex flex-col justify-between"
          >
            <h3 className="text-lg font-semibold">{student.name}</h3>
            <p className="text-gray-500">Referral Code: {student.referralCode}</p>
            <p className="text-gray-600">Total Spent: ₹{student.totalSpent}</p>
            <button
              className="mt-2 px-3 py-1 bg-red-400 text-white rounded hover:bg-red-600 hover:cursor-pointer"
              onClick={() => navigate(`/students/${student.id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
