import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Connect from "../components/Auth/Connect";
import CreateProfile from "../components/Auth/CreateProfile";
import SignUp from "../components/Auth/SignUp";
import Welcome from "../components/Auth/Welcome";
import Home from "../components/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/createprofile" element={<CreateProfile />} />
        <Route path="/connect" element={<Connect />} />

        {/* <Route path="/page1/*" element={<Page1 />} />
        <Route path="/page2/*" element={<Page2 />} />
        <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
