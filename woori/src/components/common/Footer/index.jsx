import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HomeSVG } from "../../../assets/icon/home.svg";
import { ReactComponent as ChatSVG } from "../../../assets/icon/chat.svg";
import * as S from "./style";

function Footer() {
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
        <Link to="/signup" onClick={() => setIsHome(false)}>
          <ChatSVG />
          <div>채팅</div>
        </Link>
      </S.Section>
    </S.Container>
  );
}

export default Footer;
