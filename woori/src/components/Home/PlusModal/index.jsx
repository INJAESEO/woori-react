import React from "react";
import { useNavigate } from "react-router";
import Modal from "../../common/Modal";
import * as S from "./style";

function PlusModal({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} closeButton={false}>
        <S.Title>게시글을 추가하시겠습니까?</S.Title>
        <S.Button onClick={() => navigate("/new")}>확인</S.Button>
        <S.Button onClick={() => setIsOpen(false)}>취소</S.Button>
      </Modal>
    </>
  );
}

export default PlusModal;
