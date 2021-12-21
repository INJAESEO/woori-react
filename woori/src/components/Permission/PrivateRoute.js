import React from "react";
import isLogin from "./isLogin";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  return isLogin() ? children : <Navigate to="/welcome" />;
};

export default PrivateRoute;
