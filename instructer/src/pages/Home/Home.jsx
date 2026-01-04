import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import InstructorWelcome from "../../components/InstructorWelcome/InstructorWelcome";

const Home = ({status="approved"}) => {
  
  return (
    <div>
      <Navbar 
      status={status} />
      <InstructorWelcome
  status={status}
  instructorName="Rumais "
/>

    </div>
  );
};

export default Home;
