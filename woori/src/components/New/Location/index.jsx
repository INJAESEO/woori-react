import React, { useState } from "react";
import * as S from "./style";

function Location() {
  const [isLocation, setIsLocation] = useState(false);
  const [location, setLocation] = useState(null);

  return (
    <>
      <S.Container>
        {!isLocation && <S.PlusButton>위치 입력하기 +</S.PlusButton>}
        {isLocation && (
          <>
            <S.Input placeholder="위치를 입력하세요" disabled></S.Input>
            <S.Input placeholder="카테고리(식당, 카페, 액티비티)"></S.Input>
            <S.Input placeholder="장소" disabled></S.Input>
          </>
        )}
      </S.Container>
    </>
  );
}

export default Location;
