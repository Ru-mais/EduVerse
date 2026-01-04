import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Bookings from "./pages/Bookings/Bookings";

const App = ({status='approved'}) => {// approved pending rejected
  const InstructorStatus=status
  return (
    <Routes>
      <Route path="/" element={<Home status={InstructorStatus}/>} />
      <Route path="/addcourse" element={<Add status={InstructorStatus}/>} />
      <Route path="/listcourse" element={<List status={InstructorStatus} />} />
      <Route path="/bookings" element={<Bookings status={InstructorStatus} />} />
    </Routes>
  );
};

export default App;
