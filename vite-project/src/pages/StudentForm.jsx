import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const StudentForm = ({ addStudent }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const generateReferralCode = () => {
    return "REF" + Math.floor(1000 + Math.random() * 9000);
  };

  const onSubmit = (data) => {
    const newStudent = {
      id: Date.now(),
      name: data.name,
      referralCode: generateReferralCode(),
      totalSpent: 0,
      orders: [],
    };
  console.log("FORM DATA 👉", data);
  console.log("NEW STUDENT 👉", newStudent);
    addStudent(newStudent);
    navigate("/students");
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add Student</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Student Name</label>
          <input
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter student name"
            {...register("name", {
              required: "Name is required",
              minLength: { value: 2, message: "Minimum 2 characters" },
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-red-400 text-white py-2 rounded hover:bg-red-600 hover:cursor-pointer"
        >
          Create Student
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
