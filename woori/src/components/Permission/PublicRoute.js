import React from "react";
import isLogin from "./isLogin";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children, restricted }) => {
  return (
    // 로그인 했고 restricted true이면 로그인 회원가입 페이지 못감
    isLogin() && restricted ? <Navigate to="/" /> : children
  );
};

export default PublicRoute;
