import React, { useState, useEffect } from 'react'
import SnackCard from '../component/SnackCard'
import foodData from '../data/foodData'
import OrderModal from '../component/OrderModal'

const Snacks = ({ students =[], addOrder}) => {

    const [snacks, setSnacks] = useState([]);
    const [selectedSnack, setSelectedSnack] = useState(null);

    useEffect(() => {
    const snacksOnly = foodData
      .filter(item => item.category === "Snacks")
      .map(item => ({ ...item, ordersCount: 0 }));

    setSnacks(snacksOnly);
  }, []);

    const handleOrderSubmit = (studentId, quantity) => {
    setSnacks(prev =>
      prev.map(s =>
        s.id === selectedSnack.id
          ? { ...s, ordersCount: s.ordersCount + Number(quantity) }
          : s
      )
    );

    addOrder?.(selectedSnack, studentId, quantity);
    setSelectedSnack(null);
  };

  return (
    <div className='p-6'>
        <h2 className="text-2xl font-bold mb-4">Snacks</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {snacks.map(snack => (
          <SnackCard
            key={snack.id}
            snack={snack}
            onOrder={() => setSelectedSnack(snack)}
          />
        ))}
      </div>

      {selectedSnack && (
        <OrderModal
          snack={selectedSnack}
          students={students}
          onClose={() => setSelectedSnack(null)}
          onSubmit={handleOrderSubmit}
        />
      )}
    </div>
  )
}

export default Snacks
