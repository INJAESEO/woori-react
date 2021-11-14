import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../components/Auth/SignUp";
import Home from "../components/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/page1/*" element={<Page1 />} />
        <Route path="/page2/*" element={<Page2 />} />
        <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
