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

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chkresponse" element={<ChkResponse />} />
        <Route path="chkprofile" element={<ChkProfile />} />
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createprofile" element={<CreateProfile />} />
        <Route path="/connect" element={<Connect />} />

        <Route path="/new" element={<New />} />

        {/* <Route path="/page1/*" element={<Page1 />} />
        <Route path="/page2/*" element={<Page2 />} /> */}
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
