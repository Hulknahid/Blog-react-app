import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLogged } from "./Auth";

const PrivateRoutes = () => {
  //   return (
  //     <div>
  //       <h1>Private Routes</h1>
  //       <Outlet />
  //     </div>
  //   );
  //   return isLogged() ? <Outlet /> : <Navigate to="/login" />;
  if (isLogged()) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoutes;
