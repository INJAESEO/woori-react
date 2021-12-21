import React, { useContext } from "react";
import Modal from "../../../common/Modal";
import axios from "axios";
import * as S from "./style";
import { CookieContext } from "../../../../App";

function DdayModal({ isOpen, setIsOpen, dday, handleDday }) {
  const accessToken = useContext(CookieContext);
  const createDday = async (formData) => {
    await axios({
      method: "PATCH",
      url: "http://localhost:8000/network-api/couplenet/",
      data: formData,
      headers: {
        Authorization: `Token ${accessToken.token}`,
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    })
      .then((res) => {
        console.dir(res.data);
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("created_at", dday);

    if (!dday) {
      alert("날짜를 입력해주세요");
      return;
    }

    createDday(formData);
    setIsOpen(false);
    return;
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <S.Title>날짜를 입력해주세요!</S.Title>
      <form>
        <input type="date" onChange={handleDday} />
        <button type="submit" onClick={onSubmitHandler}>
          확인
        </button>
      </form>
    </Modal>
  );
}

export default DdayModal;
