import React, { useCallback, useRef, useState } from "react";
import * as S from "./style";
import { ReactComponent as StarSVG } from "../../../assets/icon/star.svg";
import Swiper from "../../common/Swiper";

function PostInput({ handleTitle, handleContent, handleDate, star, setStar }) {
  const [imgList, setImgList] = useState([]);
  const [previewImgList, setPreviewImgList] = useState([]);
  const imgRef = useRef();

  const onImgInputBtnClick = useCallback((e) => {
    e.preventDefault();
    imgRef.current.click();
  }, []);

  const handleImage = useCallback(
    (e) => {
      if (e.target.files.length > 3) {
        alert("사진은 3장까지 업로드할 수 있습니다.");
        return;
      }
      setImgList([]);
      setPreviewImgList([]);
      for (let i = 0; i < e.target.files.length; i += 1) {
        setImgList((prev) => [...prev, e.target.files[i]]);
        setPreviewImgList((prev) => [
          ...prev,
          URL.createObjectURL(e.target.files[i]),
        ]);
      }
    },
    [imgList, previewImgList]
  );

  return (
    <>
      <S.Container>
        <S.Input type="date" onChange={handleDate} />
        <S.Input placeholder="제목을 입력해주세요" onChange={handleTitle} />
        <S.ImageButton onClick={onImgInputBtnClick}>+ 사진 추가</S.ImageButton>
        <Swiper margin="10px" aline="prev">
          {previewImgList.map((imgUrl) => (
            <div>
              <S.ImagePreview src={imgUrl}></S.ImagePreview>
            </div>
          ))}
        </Swiper>

        <S.PictureInput
          ref={imgRef}
          type="file"
          accept="image/*"
          onChange={handleImage}
          multiple="multiple"
        />
        <div>
          <S.StarWrapper star={star}>
            <StarSVG onClick={() => setStar(1)} />
            <StarSVG onClick={() => setStar(2)} />
            <StarSVG onClick={() => setStar(3)} />
            <StarSVG onClick={() => setStar(4)} />
            <StarSVG onClick={() => setStar(5)} />
          </S.StarWrapper>
          <S.ContentInput
            onChange={handleContent}
            placeholder="내용을 입력해주세요"
          />
        </div>
      </S.Container>
    </>
  );
}

export default PostInput;
