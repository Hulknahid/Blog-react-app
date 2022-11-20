import React from "react";

const Base = ({ title = "Welcome to our Blog application", children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default Base;
