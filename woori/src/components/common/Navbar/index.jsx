import React from "react";
import { Link } from "react-router-dom";
import logout from "../../Permission/logout";
import * as S from "./style";

const Navbar = ({ isPostOpen }) => {
  function onLogoutHandler() {
    alert("로그아웃 되었습니다");
    logout();
  }
  return (
    <div>
      <S.Container isOpen={isPostOpen}>
        <Link to="/" className="logo" style={{ textDecoration: "none" }}>
          우리두리
        </Link>
        <Link
          to="/welcome"
          onClick={onLogoutHandler}
          style={{ textDecoration: "none", color: "#A35414" }}
        >
          <span>로그아웃</span>
        </Link>
      </S.Container>
    </div>
  );
};

export default Navbar;
