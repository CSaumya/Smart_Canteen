import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FoodData from "../data/foodData";

const StudentDetail = ({ students, addOrder }) => {
  const { id } = useParams(); // get student ID from URL
  const student = students.find((s) => s.id === Number(id));

  const [selectedSnackId, setSelectedSnackId] = useState(FoodData[0].id);
  const [quantity, setQuantity] = useState(1);

  if (!student) return <p>Student not found</p>;

  const handleOrder = () => {
    const snack = FoodData.find((f) => f.id === Number(selectedSnackId));
    addOrder(snack, student.id, Number(quantity));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{student.name}</h2>
      <p className="text-gray-500">Referral Code: {student.referralCode}</p>
      <p className="text-gray-600 mb-4">Total Spent: ₹{student.totalSpent}</p>

      <h3 className="text-xl font-semibold mb-2">Past Orders</h3>
      {student.orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <table className="table-auto border-collapse border border-gray-300 mb-4">
          <thead>
            <tr>
              <th className="border px-2 py-1">Snack</th>
              <th className="border px-2 py-1">Quantity</th>
              <th className="border px-2 py-1">Amount</th>
            </tr>
          </thead>
          <tbody>
            {student.orders.map((order, index) => (
              <tr key={index}>
                <td className="border px-2 py-1">{order.snack.name}</td>
                <td className="border px-2 py-1">{order.quantity}</td>
                <td className="border px-2 py-1">₹{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h3 className="text-xl font-semibold mb-2">Place New Order</h3>
      <div className="flex items-center gap-2">
        <select
          value={selectedSnackId}
          onChange={(e) => setSelectedSnackId(e.target.value)}
          className="border p-1 rounded"
        >
          {FoodData.map((snack) => (
            <option key={snack.id} value={snack.id}>
              {snack.name} - ₹{snack.price}
            </option>
          ))}
        </select>

        <input
          type="number"
          min="1"
          max="5"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="border p-1 rounded w-16"
        />

        <button
          onClick={handleOrder}
          className="px-3 py-1 bg-red-400 text-white rounded hover:bg-red-600 cursor-pointer"
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default StudentDetail;
