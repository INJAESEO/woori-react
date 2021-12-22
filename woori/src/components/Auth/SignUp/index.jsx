import React, { useContext, useState } from "react";
import Footer from "../../common/Footer";
import axios from "axios";
// import { userContext } from "../../../App";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

function SignUp() {
  // let user = useContext(userContext);
  let navigate = useNavigate();
  // 이름, 비밀번호
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [isName, setIsName] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const signup = async (userData) => {
    const response = await axios({
      method: "post",
      url: "/user-api/user/",
      data: userData,
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
      })
      .then(() => navigate("/login"))
      .catch((err) =>
        // console.dir(err.response.data.password[0])
        {
          console.log(err);
          alert("아이디가 중복됩니다");
        }
      );
    return response;
  };

  function onSubmitHandler(e) {
    // prevent submit
    e.preventDefault();

    let userData = {
      username: username,
      password: password,
    };

    const pattern_eng = /[a-zA-Z]/;

    if (username === "") {
      alert("아이디를 입력하세요");
      return false;
    } else if (password === "") {
      alert("비밀번호를 입력하세요");
      return false;
    } else if (passwordConfirm === "") {
      alert("비밀번호 확인을 입력하세요");
      return false;
    } else if (password !== passwordConfirm) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다");
      return false;
    } else if (!pattern_eng.test(username) || !pattern_eng.test(password)) {
      alert("아이디와 비밀번호에 문자1개 이상 포함해야 합니다");
      return false;
    } else if (username.length < 7 || password.length < 7) {
      alert("아이디와 비밀번호 7자리 이상이어야 합니다");
      return false;
    }
    // console.log(userData);
    return signup(userData);
  }

  return (
    <>
      <S.Title>
        우리두리에 잘 오셨어요!
        <br />
        회원으로 가입해주세요
      </S.Title>
      <S.Form onSubmit={onSubmitHandler}>
        <S.Input
          type="text"
          placeholder="아이디(문자1개포함 7자리 이상)"
          onChange={(e) => {
            setUsername(() => e.target.value);
          }}
        />
        <S.Input
          type="password"
          placeholder="비밀번호(문자1개포함 7자리 이상)"
          onChange={(e) => {
            setPassword(() => e.target.value);
          }}
        />
        <S.Input
          type="password"
          placeholder="비밀번호확인"
          onChange={(e) => {
            setPasswordConfirm(() => e.target.value);
          }}
        />
        <S.Button type="submit">가입완료</S.Button>
      </S.Form>
    </>
  );
}

export default SignUp;
