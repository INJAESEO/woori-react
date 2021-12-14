import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Connect from "../components/Auth/Connect";
import CreateProfile from "../components/Auth/CreateProfile";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import Welcome from "../components/Auth/Welcome";
import Home from "../components/Home";
import PrivateRoute from "../components/PrivateRoute";
import PublicRoute from "../components/PublicRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <PrivateRoute exact path="/" element={<Home />} />
        <PublicRoute
          restricted={false}
          exact
          path="/welcome"
          element={<Welcome />}
        />
        <PublicRoute
          restricted={true}
          exact
          path="/signup"
          element={<SignUp />}
        />
        <PublicRoute
          restricted={true}
          exact
          path="/login"
          element={<Login />}
        />
        <PrivateRoute exact path="/createprofile" element={<CreateProfile />} />
        <PrivateRoute exact path="/connect" element={<Connect />} />

        {/* <Route path="/page1/*" element={<Page1 />} />
        <Route path="/page2/*" element={<Page2 />} />
        <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
