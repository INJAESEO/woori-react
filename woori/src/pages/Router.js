import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Connect from "../components/Auth/Connect";
import CreateProfile from "../components/Auth/CreateProfile";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import Welcome from "../components/Auth/Welcome";
import Home from "../components/Home";
import Connect2 from "../components/Auth/Connect";
import PageNotFound from "../components/PageNotFound";
import New from "../components/New";
import List from "../components/Contents/List";
import Detail from "../components/Contents/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/connect2" element={<Connect2 />} />
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
        <Route path="/list" element={<List />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
