import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Connect from "../components/Auth/Connect";
import CreateProfile from "../components/Auth/CreateProfile";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import Welcome from "../components/Auth/Welcome";
import Home from "../components/Home";
import PageNotFound from "../components/PageNotFound";
import New from "../components/New";
import ChkResponse from "../components/Auth/Connect/ChkResponse";
import ChkProfile from "../components/Auth/CreateProfile/ChkProfile";
import PrivateRoute from "../components/Permission/PrivateRoute";
import PublicRoute from "../components/Permission/PublicRoute";
import Logout from "../components/Permission/logout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/chkresponse"
          element={
            <PrivateRoute>
              <ChkResponse />
            </PrivateRoute>
          }
        />
        <Route
          path="chkprofile"
          element={
            <PrivateRoute>
              <ChkProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/welcome"
          element={
            <PublicRoute>
              <Welcome />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute restricted={true}>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute restricted={true}>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/createprofile"
          element={
            <PrivateRoute>
              <CreateProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/connect"
          element={
            <PrivateRoute>
              <Connect />
            </PrivateRoute>
          }
        />

        <Route
          path="/new"
          element={
            <PrivateRoute>
              <New />
            </PrivateRoute>
          }
        />

        {/* <Route path="/page1/*" element={<Page1 />} />
        <Route path="/page2/*" element={<Page2 />} /> */}
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
