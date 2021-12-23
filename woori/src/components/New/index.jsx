import React, { useCallback, useContext, useEffect, useState } from "react";
import { CookieContext } from "../../App";
import Header from "../common/Header";
import Location from "./Location";
import PostInput from "./PostInput";
import axios from "axios";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import Navbar from "../common/Navbar";

function New() {
  const accessToken = useContext(CookieContext);
  const [placeId, setPlaceId] = useState(null);
  const [postId, setPostId] = useState(null);
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

  const [imgList, setImgList] = useState([]);

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
        console.dir(res.data);
        setPostId(() => res.data.id);
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  const createPostImage = async (formData) => {
    await axios({
      method: "POST",
      url: "http://localhost:8000/post-api/postimage/",
      data: formData,
      headers: {
        Authorization: `Token ${accessToken.token}`,
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    })
      .then((res) => {
        console.dir(res.data);
        navigate(`/posts/${postId}`);
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  useEffect(() => {
    if (placeId) {
      const formPostData = new FormData();
      formPostData.append("title", title);
      formPostData.append("content", content);
      formPostData.append("score", star);
      formPostData.append("when", date);
      formPostData.append("place", placeId);

      createPost(formPostData);

      return;
    }
  }, [placeId]);

  useEffect(() => {
    if (postId) {
      const formImageData = new FormData();
      for (let i = 0; i < imgList.length; i++) {
        formImageData.append("images", imgList[i]);
      }

      formImageData.append("date_post", postId);

      createPostImage(formImageData);

      return;
    }
  }, [postId]);

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
            imgList={imgList}
            setImgList={setImgList}
          />
          <S.Button>저장</S.Button>
        </form>
      </S.Container>
    </>
  );
}

export default New;
