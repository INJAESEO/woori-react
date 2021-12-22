import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HomeSVG } from "../../../assets/icon/home.svg";
import { ReactComponent as LogoutSVG } from "../../../assets/icon/logout.svg";
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
        <Link to="/posts">
          <LogoutSVG />
          <div>목록</div>
        </Link>
      </S.Section>
    </S.Container>
  );
}

export default Footer;
