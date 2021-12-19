import React from "react";
import { useNavigate } from "react-router";
import Modal from "../../common/Modal";

function PlusModal({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} closeButton={false}>
        <p>게시글을 추가하시겠습니까?</p>
        <button onClick={() => navigate("/new")}>확인</button>
        <button onClick={() => setIsOpen(false)}>취소</button>
      </Modal>
    </>
  );
}

export default PlusModal;
