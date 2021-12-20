import React, { useState } from "react";
import { useInput } from "../../../../hooks/useInput";
import Modal from "../../../common/Modal";
import MapContainer from "./MapContainer";
import * as S from "./style";

function LocationSelectModal({
  isOpen,
  setIsOpen,
  setLocation,
  setPlace,
  setIsLocation,
  setLatitude,
  setLongitude,
}) {
  // 지도 검색
  const [searchText, handleSearchText, setSearchText] = useInput([]);
  const [searchPlace, setSearchPlace] = useState("");

  // 선택한 장소

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchPlace(searchText);
    setSearchText("");
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      closeButton={false}
      style={{ padding: "16px" }}
      styleInWhiteBox={{ padding: "16px" }}
    >
      <S.Container>
        <form className="inputForm">
          <S.Input
            placeholder="검색어를 입력하세요"
            onChange={handleSearchText}
            value={searchText}
          />
          <S.Button onClick={handleSubmit}>검색</S.Button>
        </form>
        <MapContainer
          searchPlace={searchPlace}
          setLocation={setLocation}
          setPlace={setPlace}
          setLatitude={setLatitude}
          setLongitude={setLongitude}
          setIsOpen={setIsOpen}
          setIsLocation={setIsLocation}
        />
      </S.Container>
    </Modal>
  );
}

export default LocationSelectModal;
