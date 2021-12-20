import React, { useCallback, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { CookieContext } from "../../App";
import Header from "../common/Header";
import Location from "./Location";
import PostInput from "./PostInput";
import axios from "axios";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useInput } from "../../hooks/useInput";

function New() {
  const accessToken = useContext(CookieContext);
  const [placeId, setPlaceId] = useState(null);
  const navigate = useNavigate();

  const [location, setLocation] = useState(null);
  const [place, setPlace] = useState(null);
  const [category, handleCategory, setCategory] = useInput("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const [date, handleDate, setDate] = useInput("");
  const [title, handleTitle, setTitle] = useInput("");
  const [content, handleContent, setContent] = useInput("");
  const [star, setStar] = useState(0);

  const createPlace = async (formData) => {
    await axios({
      method: "POST",
      url: "http://localhost:8000/post-api/place/",
      data: formData,
      headers: {
        Authorization: `Token ${accessToken.token}`,
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    })
      .then((res) => {
        console.dir(res);
        setPlaceId(() => res.data.id);
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  const createPost = async (formData) => {
    await axios({
      method: "POST",
      url: "http://localhost:8000/post-api/post/",
      data: formData,
      headers: {
        Authorization: `Token ${accessToken.token}`,
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    })
      .then((res) => {
        navigate(`/posts/${res.id}`);
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const formPlaceData = new FormData();
    formPlaceData.append("category", category);
    formPlaceData.append("name", place);
    formPlaceData.append("address", location);
    formPlaceData.append("latitude", latitude);
    formPlaceData.append("longitude", longitude);

    if (!place) {
      alert("위치를 입력해주세요");
      return;
    }
    if (category === "") {
      alert("카테고리를 입력해주세요");
      return;
    }
    if (title === "") {
      alert("제목를 입력해주세요");
      return;
    }
    if (content === "") {
      alert("제목를 입력해주세요");
      return;
    }
    if (date === "") {
      alert("날짜를 입력해주세요");
      return;
    }
    createPlace(formPlaceData);

    console.log(placeId);

    const formPostData = new FormData();
    formPostData.append("title", title);
    formPostData.append("content", content);
    formPostData.append("score", star);
    formPostData.append("when", date);
    formPostData.append("place", placeId);

    createPost(formPostData);
    return;
  };

  return (
    <>
      <Header content="글쓰기" />
      <S.Container>
        <form onSubmit={onSubmitHandler}>
          <Location
            location={location}
            setLocation={setLocation}
            place={place}
            setPlace={setPlace}
            setLatitude={setLatitude}
            setLongitude={setLongitude}
            handleCategory={handleCategory}
          />
          <PostInput
            handleTitle={handleTitle}
            handleContent={handleContent}
            handleDate={handleDate}
            star={star}
            setStar={setStar}
          />
          <S.Button>저장</S.Button>
        </form>
      </S.Container>
    </>
  );
}

export default New;
