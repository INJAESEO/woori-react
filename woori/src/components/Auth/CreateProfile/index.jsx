import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  CookieContext,
  NicknameContext,
  SetNicknameContext,
} from "../../../App";
import Connect from "../Connect";
import * as S from "./style";
import { useSetRecoilState } from "recoil";
import { checkState } from "../../../utils/atoms";

function CreateProfile() {
  const [profileImg, setProfileImg] = useState();
  const [previewImg, setPreviewImg] = useState();
  const [nickname, setNickname] = useState("");
  const [idCode, setIdCode] = useState("");
  const selectList = ["남자", "여자"];
  // select에서는 디폴트값이 필요하다
  const [selected, setSelected] = useState("man");
  const navigate = useNavigate();
  const accessToken = useContext(CookieContext);
  const [isBlocking, setIsBlocking] = useState(false);
  const setCheck = useSetRecoilState(checkState);

  const createProfile = async (formData) => {
    axios({
      method: "POST",
      url: "/user-api/profile/",
      data: formData,
      headers: {
        Authorization: `Token ${accessToken.token}`,
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    })
      .then((res) => {
        // Response 로 생성된 id_code 값을 state에 저장
        console.log(res.data.id_code);
        setIdCode(() => res.data.id_code);
        console.log(idCode);
        setCheck(() => "isProfile");
      })
      .then(() => navigate("/chkresponse"))
      // .then((res) => {
      //     // console.log(res.data.id_code)
      // })
      .catch((err) => {
        // 이미프로필있는 경우도 생각하자 !
        if (formData.profile_img === undefined) {
          alert("프로필 사진을 올려주세요");
        }
      });
  };

  function onSelectionHandler(e) {
    setSelected(e.target.value);
  }

  function onImgUploadHandler(e) {
    // 프로필 이미지 state 저장
    const imgFile = e.target.files[0];
    setProfileImg(imgFile);
    console.log(e.target.files[0]);

    // 이미지 미리보기
    const binaryData = [];
    binaryData.push(imgFile);
    const imgUrl = URL.createObjectURL(new Blob(binaryData, {
        type: "application/zip"
    }));

    // const imgUrl = URL.createObjectURL(imgFile);
    setPreviewImg(imgUrl);
  }

  function onSubmitHandler(e) {
    e.preventDefault();

    // 이미지 포함된 전체 데이터를 FormData로 wrap
    const formData = new FormData();
    formData.append("gender", selected);
    formData.append("nickname", nickname);
    formData.append("profile_img", profileImg);

    if (nickname === "") {
      alert("닉네임을 입력해주세요");
      return false;
    } else {
      return createProfile(formData);
    }
  }

  return (
    <>
      <S.Title> 프로필을 입력해주세요</S.Title>

      {/* src속성에 state를 부여하여 미리보기  */}
      <S.Container>
        <S.Img src={previewImg} alter="프로필사진입니다." />
      </S.Container>
      <S.Form onSubmit={onSubmitHandler}>
        {/* <label for="profileImg">사진 찾기</label> */}
        <S.InputImg
          type="file"
          id="profileImg"
          accept="image/*"
          name="profileImg"
          onChange={onImgUploadHandler}
        ></S.InputImg>
        <S.Input
          type="text"
          placeholder="닉네임"
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        ></S.Input>
        <S.Select onChange={onSelectionHandler}>
          {/* <option value="남자">남자</option>
                    <option value="여자">여자</option> */}
          {selectList.map((i) => {
            return (
              <option value={i} key={i}>
                {i}
              </option>
            );
          })}
        </S.Select>
        <S.Button>가입완료</S.Button>
      </S.Form>
    </>
  );
}

export default CreateProfile;
