import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { CookieContext } from "../../../App";
import { useInput } from "../../../hooks/useInput";

import { useProfile } from "../../../hooks/useProfile";

import DdayModal from "./DdayModal";
import * as S from "./style";

const Post = ({ placePk, placeLength, isPostOpen, setIsPostOpen }) => {
  const [isDdayModalOpen, setIsDdayModalOpen] = useState(false);
  const [dday, handleDday, setDday] = useInput(null);

  const [postList, setPostList] = useState(null);
  const accessToken = useContext(CookieContext);
  const navigate = useNavigate();
  const { profile } = useProfile();
  const [network, setNetwork] = useState(null);
  const [query, setQuery] = useState("?filter=all&value=all");

  useEffect(() => {
    if (accessToken) {
      getPosts();
      getNetwork();
    }
  }, [accessToken, isDdayModalOpen, query]);

  useEffect(() => {
    console.log(placePk);
    if (placePk) {
      setQuery(() => `?filter=placepk&value=${placePk}`);
      return;
    }
  }, [placePk]);

  const getPosts = async () => {
    await axios({
      method: "GET",
      url: `http://localhost:8000/post-api/post/${query}`,
      headers: {
        Authorization: `Token ${accessToken.token}`,
      },
    }).then((res) => setPostList(() => res.data));
  };

  const getNetwork = async () => {
    await axios({
      method: "GET",
      url: `http://localhost:8000/network-api/couplenet/`,
      headers: {
        Authorization: `Token ${accessToken.token}`,
      },
    }).then((res) => setNetwork(() => res.data));
  };

  if (!profile || !network || !postList) {
    return <div>로딩중</div>;
  }

  return (
    <>
      <DdayModal
        isOpen={isDdayModalOpen}
        setIsOpen={setIsDdayModalOpen}
        dday={dday}
        handleDday={handleDday}
      />
      <S.Container isOpen={isPostOpen} onClick={(e) => e.stopPropagation()}>
        <S.Background
          onClick={() => setIsPostOpen((isPostOpen) => !isPostOpen)}
        />
        <S.Header>
          <S.Dday onClick={() => setIsDdayModalOpen(true)}>
            {network.dday === "미설정"
              ? "😍입력하세요😍 "
              : "😍D+" + network.dday + "😍"}
          </S.Dday>
          <S.ProfileWrapper>
            <div>
              <img src={network.profiles[0].profile_img} />
              <p>{network.profiles[0].nickname}</p>
            </div>
            <p>❤️</p>
            <div>
              <img src={network.profiles[1].profile_img} />
              <p>{network.profiles[1].nickname}</p>
            </div>
          </S.ProfileWrapper>
          <S.PlaceCount>
            같이 간 플레이스 개수: <span>{placeLength}</span>
          </S.PlaceCount>
        </S.Header>
        <S.PostListWrapper>
          {postList.map((post) => (
            <S.PostContainer
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/posts/${post.id}`);
              }}
            >
              <S.PostHeader>
                <h3>{post.place.name}</h3>
                <div>
                  <span>{post.place.category}</span>
                  <span>{post.when}</span>
                </div>
              </S.PostHeader>
              <div>
                {post.images.length > 0 && (
                  <img src={post.images[0].content} alt="" />
                )}

                <div>
                  <p className="title">{post.title}</p>
                  <p className="content">{post.content}</p>
                </div>
              </div>
            </S.PostContainer>
          ))}
        </S.PostListWrapper>
      </S.Container>
    </>
  );
};

export default Post;
