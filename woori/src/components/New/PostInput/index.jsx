import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useInput } from "../../../hooks/useInput";

function PostInput() {
  const [date, handleDate, setDate] = useInput([]);
  const [title, handleTitle, setTitle] = useInput([]);

  return (
    <>
      <S.Container>
        <S.Input type="date" onChange={handleDate} />
        <S.Input placeholder="제목을 입력해주세요" onChange={handleTitle} />
      </S.Container>
    </>
  );
}

export default PostInput;
