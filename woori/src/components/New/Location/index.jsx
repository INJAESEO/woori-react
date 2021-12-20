import React, { useState } from "react";
import { useInput } from "../../../hooks/useInput";
import LocationSelectModal from "./LocationSelectModal";
import * as S from "./style";

function Location() {
  const [isLocation, setIsLocation] = useState(false);
  const [location, setLocation] = useState(null);
  const [place, setPlace] = useState(null);
  const [isModalOn, setIsModalOn] = useState(false);
  const [category, handleCategory, setCategory] = useInput([]);

  return (
    <>
      <LocationSelectModal
        isOpen={isModalOn}
        setIsOpen={setIsModalOn}
        setLocation={setLocation}
        setPlace={setPlace}
        setIsLocation={setIsLocation}
      />
      <S.Container>
        {!isLocation && (
          <S.PlusButton onClick={() => setIsModalOn(true)}>
            위치 입력하기 +
          </S.PlusButton>
        )}
        {isLocation && (
          <>
            <S.LocationInput onClick={() => setIsModalOn(true)}>
              {location ? location : "위치를 입력하세요"}
            </S.LocationInput>
            <S.Select onChange={handleCategory}>
              <option value="" disabled selected hidden>
                카테고리(식당, 카페, 액티비티)
              </option>
              <option value="식당">식당</option>
              <option value="카페">카페</option>
              <option value="액티비티">액티비티</option>
              <option value="기타">기타</option>
            </S.Select>
            <S.Input placeholder="장소" disabled value={place}></S.Input>
          </>
        )}
      </S.Container>
    </>
  );
}

export default Location;
