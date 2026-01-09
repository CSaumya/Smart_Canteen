import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './component/Navbar'

import Snacks from "./pages/Snacks";
import Students from './pages/Students';
import StudentDetail from './pages/StudentDetails'
import StudentForm from './pages/StudentForm';

import studentsData from "./data/studentData";

const App = () => {

  // Use state to update totalSpent and orders dynamically
  const [students, setStudents] = useState(studentsData);

  // Function to add a new student
const addStudent = (student) => {
  setStudents((prev) => [...prev, student]);
};

 // Function to add an order
  const addOrder = (snack, studentId, quantity) => {
    const total = snack.price * quantity;

    setStudents((prevStudents) =>
      prevStudents.map((s) =>
        s.id === Number(studentId)
          ? {
              ...s,
              totalSpent: s.totalSpent + total,
              orders: [
                ...s.orders,
                { snack, quantity, total, date: new Date() },
              ],
            }
          : s
      )
    );
  };

  return (
    <BrowserRouter>
      <Navbar />
     <Routes>
  <Route path="/" element={<Navigate to="/snacks" />} />
  
  <Route
    path="/snacks"
    element={<Snacks students={students} />}
  />

  <Route
    path="/students"
    element={<Students students={students} />}
  />

  <Route
    path="/studentform"
    element={<StudentForm addStudent={addStudent} />}
  />

  <Route
    path="/students/:id"
    element={<StudentDetail students={students} />}
  />
</Routes>

    </BrowserRouter>
  );
};

export default App;
