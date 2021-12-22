import React, { useState, useCallback } from "react";
import { useInput } from "../../../hooks/useInput";
import LocationSelectModal from "./LocationSelectModal";
import * as S from "./style";

function Location({
  location,
  setLocation,
  place,
  setPlace,
  setLatitude,
  setLongitude,
  handleCategory,
}) {
  const [isLocation, setIsLocation] = useState(false);

  const [isModalOn, setIsModalOn] = useState(false);

  return (
    <>
      <LocationSelectModal
        isOpen={isModalOn}
        setIsOpen={setIsModalOn}
        setLocation={setLocation}
        setPlace={setPlace}
        setIsLocation={setIsLocation}
        setLatitude={setLatitude}
        setLongitude={setLongitude}
      />
      <S.Container>
        {!isLocation && (
          <S.PlusButton onClick={() => setIsModalOn(true)}>
            위치 입력하기 +
          </S.PlusButton>
        )}
        {isLocation && (
          <form>
            <S.LocationInput onClick={() => setIsModalOn(true)}>
              {location ? location : "위치를 입력하세요"}
            </S.LocationInput>
            <S.Input placeholder="장소" disabled value={place}></S.Input>
            <S.Select onChange={handleCategory}>
              <option value="" disabled selected hidden>
                카테고리(식당, 카페, 액티비티)
              </option>
              <option value="식당">식당</option>
              <option value="카페">카페</option>
              <option value="액티비티">액티비티</option>
              <option value="기타">기타</option>
            </S.Select>
          </form>
        )}
      </S.Container>
    </>
  );
}

export default Location;
