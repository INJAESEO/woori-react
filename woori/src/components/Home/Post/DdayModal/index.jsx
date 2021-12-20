import React from "react";
import Modal from "../../../common/Modal";
import * as S from "./style";

function DdayModal({ isOpen, setIsOpen, handleDday }) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <S.Title>날짜를 입력해주세요!</S.Title>
      <input type="date" onChange={handleDday} />
      <button type="submit" onClick={() => setIsOpen(false)}>
        확인
      </button>
    </Modal>
  );
}

export default DdayModal;
