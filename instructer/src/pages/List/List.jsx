import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ListPage from "../../components/ListPage/ListPage";

const List = ({status="approved"}) => {
  return (
    <div>
     <Navbar 
           status={status} />
      <ListPage />
    </div>
  );
};

export default List;
