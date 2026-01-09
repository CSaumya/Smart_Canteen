import React, { useState } from "react";


// { Get /students : for student prop, Get /snacks : for snack prop }
const OrderModal = ({ snack, students, onClose, onSubmit }) => {
  const [studentId, setStudentId] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!studentId) return alert("Select a student");

    // Post /orders 
    onSubmit(studentId, quantity);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-80">
        <h3 className="text-xl font-semibold mb-2">Order {snack.name}</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label>
            Student:
            <select
              className="w-full border p-1 rounded"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            >
              <option value="">Select Student</option>
              {students?.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            Quantity:
            <input
              type="number"
              min="1"
              max="5"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full border p-1 rounded"
            />
          </label>

          <div className="flex justify-end gap-2 mt-2">
            <button
              type="button"
              className="px-3 py-1 border rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 hover:cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;
