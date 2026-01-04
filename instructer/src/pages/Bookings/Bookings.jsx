import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BookingsPage from "../../components/BookingsPage/BookingsPage";

const Bookings = ({status="approved"}) => {
  return (
    <div>
     <Navbar 
           status={status} />
      <BookingsPage />
    </div>
  );
};

export default Bookings;
