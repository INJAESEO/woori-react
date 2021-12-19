import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BackSVG } from "../../../assets/icon/header-back.svg";
import * as S from "./style";

function Header({ type = "main", content }) {
  const navigate = useNavigate();
  switch (type) {
    case "main":
      return (
        <>
          <S.HeaderBoard>
            <S.IconsWrapper>
              <S.IconBox onClick={() => navigate(-1)}>
                <BackSVG />
              </S.IconBox>
              {content}
              <S.IconBox />
            </S.IconsWrapper>
          </S.HeaderBoard>
          <S.HeaderWhiteSpace />
        </>
      );
    default:
      return <></>;
  }
}
export default Header;
