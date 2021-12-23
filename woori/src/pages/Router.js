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
import List from "../components/Contents/List";
import Detail from "../components/Contents/Detail";
import ChkResponse from "../components/Auth/Connect/ChkResponse";
import ChkProfile from "../components/Auth/CreateProfile/ChkProfile";
import PrivateRoute from "../components/Permission/PrivateRoute";
import PublicRoute from "../components/Permission/PublicRoute";
import Logout from "../components/Permission/logout";
import { useCheck } from "../hooks/useCheck";
import { useEffect } from "react";

const Router = () => {
  const { check } = useCheck();

  useEffect(() => {
    console.log(check);
  }, [check]);

  return (
    <BrowserRouter>
      <Routes>
        {(check === "isNone" || check === "isCouple") && (
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <ChkProfile />
              </PrivateRoute>
            }
          />
        )}
        {check === "isProfile" && (
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <ChkResponse />
              </PrivateRoute>
            }
          />
        )}
        {check === "isBoth" && (
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        )}
        {check !== "isNone" && check !== "isCouple" && check !== "isProfile" && (
          <>
            <Route
              path="/chkresponse"
              element={
                <PrivateRoute>
                  <ChkResponse />
                </PrivateRoute>
              }
            />
            <Route
              path="/chkprofile"
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
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/posts" element={<List />} />
            <Route path="/posts/:id" element={<Detail />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
