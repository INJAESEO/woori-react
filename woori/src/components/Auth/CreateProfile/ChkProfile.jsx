import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChkCoupleContext, CookieContext } from "../../../App";
import axios from "axios";
import CreateProfile from ".";
import { useCheck } from "../../../hooks/useCheck";
import Connect from "../Connect";

function ChkProfile() {
  const navigate = useNavigate();
  const { check } = useCheck();

  useEffect(() => {
    console.log(check);
    if (check) {
      if (check === "isBoth") {
        navigate("/");
        return;
      }

      if (check === "isCouple") {
        navigate("/");
        return;
      }
      if (check === "isProfile") {
        navigate("/chkresponse");
        return;
      }
    }
  }, [check]);

  // 컴포넌트 안에 return값 꼭 있어야 한다.
  return (
    <div>
      <CreateProfile />
    </div>
  );
}

export default ChkProfile;
