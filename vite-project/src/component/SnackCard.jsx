import React from "react";

const SnackCard = ({ snack, onOrder }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition flex flex-col justify-between">
      <h3 className="text-lg font-semibold">{snack.name}</h3>

      <img
        src={snack.img}
        alt={snack.name}
        className="w-full h-40 object-cover rounded mb-2"
      />

      <p className="text-gray-600">Price: ₹{snack.price}</p>
      <p className="text-gray-500">Orders: {snack.ordersCount}</p>

      <button
        className="mt-2 px-3 py-1 bg-red-400 text-white rounded hover:bg-red-600 hover:cursor-pointer"
        onClick={onOrder}
      >
        Order
      </button>
    </div>
  );
};

export default SnackCard;
