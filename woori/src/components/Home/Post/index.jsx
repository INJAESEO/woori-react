import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { CookieContext } from "../../../App";
import { useInput } from "../../../hooks/useInput";

import DdayModal from "./DdayModal";
import * as S from "./style";

const Post = ({ place }) => {
  const [isPostOpen, setIsPostOpen] = useState(false);
  const [isDdayModalOpen, setIsDdayModalOpen] = useState(false);
  const [dday, handleDday, setDday] = useInput(null);
  const [query, setQuery] = useState(1);
  const [postList, setPostList] = useState([]);
  const accessToken = useContext(CookieContext);

  useEffect(() => {
    if (accessToken) {
      getPosts();
    }
  }, [accessToken, place]);

  const getPosts = async () => {
    await axios({
      method: "GET",
      url: `http://localhost:8000/post-api/post/?filter=placepk&value=${place}`,
      headers: {
        Authorization: `Token ${accessToken.token}`,
      },
    }).then((res) => setPostList(() => res.data));
  };

  return (
    <>
      <DdayModal
        isOpen={isDdayModalOpen}
        setIsOpen={setIsDdayModalOpen}
        handleDday={handleDday}
      />
      <S.Container isOpen={isPostOpen} onClick={(e) => e.stopPropagation}>
        <S.Background
          onClick={() => setIsPostOpen((isPostOpen) => !isPostOpen)}
        />
        <S.Header>
          <S.Dday onClick={() => setIsDdayModalOpen(true)}>
            {!dday ? "😍입력하세요😍 " : "😍" + dday + "😍"}
          </S.Dday>
          <S.ProfileWrapper>
            <img src="https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F37%2F201604181854386741.jpg" />
            <p>❤️</p>
            <img src="https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F37%2F201604181854386741.jpg" />
          </S.ProfileWrapper>
          <S.PlaceCount>같이 간 플레이스 개수: 36</S.PlaceCount>
        </S.Header>
        <S.PostListWrapper>
          {postList.map((post) => (
            <Link to={`/posts/${post.id}`}>
              <S.PostContainer>
                <h3>
                  {post.place.name} <span>{post.place.category}</span>
                </h3>
                <p>{post.when}</p>
                <div>
                  <img
                    src="https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F37%2F201604181854386741.jpg"
                    alt=""
                  />
                  <div>
                    <p>{post.title}</p>
                    <p className="content">{post.content}</p>
                  </div>
                </div>
              </S.PostContainer>
            </Link>
          ))}
        </S.PostListWrapper>
      </S.Container>
    </>
  );
};

export default Post;
