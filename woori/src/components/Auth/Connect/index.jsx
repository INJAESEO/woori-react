import React, { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import { CookieContext } from "../../../App";
import { useNavigate } from "react-router-dom";
import Request from "./Request/Request";
import Response from "./Response/Response";
import InputCode from "./InputCode/InputCode";

function Connect({ response }) {
  const accessToken = useContext(CookieContext);
  const [idCode, setIdCode] = useState("");
  const idCodeInput = useRef("");

  // id code를 받아온다.
  useEffect(() => {
    axios({
      method: "get",
      url: "user-api/profile/",
      headers: {
        Authorization: `Token ${accessToken.token}`,
      },
    }).then((res) => {
      // console.log(res.data.profile_data.id_code)
      setIdCode(() => res.data.profile_data.id_code);
    });
  }, []);

  if (response === "not_me") {
    return <Request></Request>;
  } else if (response === "me") {
    return <Response></Response>;
  }
  return <InputCode idCodeInput={idCodeInput} idCode={idCode}></InputCode>;
}

export default Connect;
