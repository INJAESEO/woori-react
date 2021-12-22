import React, { useState, useContext, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// 쿠키사용을 위해 라이브러리 설치후 import
import { useCookies } from "react-cookie";
import { SetCookieContext } from "../../../App";
import * as S from "./style";
import { useCheck } from "../../../hooks/useCheck";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [cookies, setCookie] = useCookies(['token']);

  let navigate = useNavigate();

  const setCookie = useContext(SetCookieContext);

  const login = async (userData) => {
    const response = await axios({
      method: "post",
      url: "/user-api/token/",
      data: userData,
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        const accessToken = res.data.token;
        setCookie("token", accessToken);
      })
      .then(() => {
        navigate("/chkprofile");
      })
      .catch((err) => {
        alert("아이디 또는 비밀번호가 맞지 않습니다");
        console.dir(err)
      });
    return response;
  };

  function onSubmitHandler(e) {
    e.preventDefault();

    let userData = {
      username: username,
      password: password,
    };

    if (username === "") {
      alert("아이디를 입력하세요");
    } else if (password === "") {
      alert("비밀번호를 입력하세요");
    } else {
      return login(userData);
    }
  }

  return (
    <div>
      <S.Title>로그인해주세요</S.Title>

      <S.Form onSubmit={onSubmitHandler}>
        <S.Input
          type="text"
          placeholder="아이디"
          onChange={(e) => {
            console.log(e);
            setUsername(e.target.value);
          }}
        ></S.Input>
        <S.Input
          type="password"
          placeholder="비밀번호"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></S.Input>
        <S.Button>로그인하기</S.Button>
      </S.Form>
    </div>
  );
}

export default Login;
