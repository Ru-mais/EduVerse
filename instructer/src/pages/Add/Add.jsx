import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AddPage from "../../components/AddPage/AddPage";

const Add = ({status="approved"}) => {
  return (
    <div>
      <Navbar 
            status={status} />
      <AddPage />
    </div>
  );
};

export default Add;
