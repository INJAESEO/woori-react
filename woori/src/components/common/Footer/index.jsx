import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HomeSVG } from "../../../assets/icon/home.svg";
import { ReactComponent as ChatSVG } from "../../../assets/icon/chat.svg";
import * as S from "./style";
import logout from '../../Permission/logout';

function Footer({ type = "Home" }) {
  const [isHome, setIsHome] = useState(true);
  return (
    <S.Container>
      <S.Section isHome={isHome} onClick={() => setIsHome(true)}>
        <Link to="/">
          <HomeSVG />
          <div>홈</div>
        </Link>
      </S.Section>
      <S.Divider />
      <S.Section isHome={!isHome}>
        <Link to="/welcome" onClick={() => {
          logout()
          setIsHome(false)
        }}>
          <ChatSVG />
          <div>로그아웃</div>
        </Link>
      </S.Section>
    </S.Container>
  );
}

export default Footer;
