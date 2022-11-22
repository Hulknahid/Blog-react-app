import React from "react";
import CustomNavbar from "../Pages/Layout/CustomNavbar";

const Base = ({ title = "Welcome to our Blog application", children }) => {
  return (
    <div className="container-fluid p-0 m-0">
      <CustomNavbar />
      <div>{children}</div>
    </div>
  );
};

export default Base;
