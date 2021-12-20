import React from "react";
import Header from "../common/Header";
import Location from "./Location";
import PostInput from "./PostInput";
import * as S from "./style";

function New() {
  return (
    <>
      <Header content="글쓰기" />
      <S.Container>
        <Location />
        <PostInput />
        <S.Button>저장</S.Button>
      </S.Container>
    </>
  );
}

export default New;
