import React, { useContext, useState } from "react";
import Footer from "../../common/Footer";
import axios from "axios";
// import { userContext } from "../../../App";
import { useNavigate } from "react-router-dom";

function SignUp() {
  // let user = useContext(userContext);

  let navigate = useNavigate();

  // 이름, 비밀번호
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [passwordConfirm, setPasswordConfirm] = useState("");
  // 오류메시지
  // let [usernameMessage, setUsernameMessage] = useState("")
  // let [passwordMessage, setPasswordMessage] = useState("")
  // let [passwordConfirmMessage, setPasswordConfirmMessage] = useState("")
  // 유효성 검사
  let [isName, setIsName] = useState(false);
  let [isPassword, setIsPassword] = useState(false);

  const signup = async (userData) => {
    axios({
      method: "post",
      url: "/user-api/user/",
      data: userData,
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
      })
      .then(() => navigate("/createprofile"))
      .catch((err) => console.log(err));
  };

  function onSubmitHandler(e) {
    // prevent submit
    e.preventDefault();

    let userData = {
      username: username,
      password: password,
    };

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
    } else {
      console.log(userData);
      return signup(userData);
    }
  }

  return (
    <>
      <h3>우리두리에 잘 오셨어요 회원으로 가입해주세요</h3>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="아이디"
          onChange={(e) => {
            setUsername(() => e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={(e) => {
            setPassword(() => e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="비밀번호확인"
          onChange={(e) => {
            setPasswordConfirm(() => e.target.value);
          }}
        />
        <button type="submit">가입완료</button>
      </form>
    </>
  );
}

export default SignUp;

// if (길이 < 7 && 문자X) {
//   alert("문자 1개 포함하여 7자리 이상 입력하세요")
//   return false
// } else {
//   return true;
// }
