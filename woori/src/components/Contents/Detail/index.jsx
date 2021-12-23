import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { useLocation, useParams } from "react-router-dom";
import * as S from "./style";
import axios from "axios";
import { CookieContext } from "../../../App";
import Header from "../../common/Header";

function Detail() {
  const navigate = useNavigate();
  // const [ Detailpage, Detailedit ] = useState ([]);
  const accessToken = useContext(CookieContext);

  const { id: postPk } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    if (accessToken || postPk) {
      getDetail();
    }
  }, [accessToken, postPk]);

  useEffect(() => {
    console.log(post);
  }, [post]);

  const getDetail = async () => {
    await axios({
      method: "GET",
      url: `http://localhost:8000/post-api/post/?filter=postpk&value=${postPk}`,
      headers: {
        Authorization: `Token ${accessToken.token}`,
      },
    }).then((res) => {
      setPost(() => res.data[0]);
    });
  };

  if (post === null) return <div>로딩중</div>;

  return (
    <div>
      <Header />
      <S.Header>
        <S.Title>{post.title}</S.Title>
        <S.Info>
          <S.InfoTop>
              <S.Left>
                  <S.Placename>{post.place.name}</S.Placename>
                  <S.Category>{post.place.category}</S.Category>
              </S.Left>
              <S.Nthvisit>{post.place.visit_count}번째 방문</S.Nthvisit>
          </S.InfoTop>
          <S.Rating>별점: {post.score}</S.Rating>
        </S.Info>
      </S.Header>
      <S.Middle>
        <S.Middlebox>
          <S.Author>
            <S.Profilepic src={post.author.profile_img}></S.Profilepic>
            <S.AuthorRight>
              <S.Profilename>{post.author.nickname}</S.Profilename>
              <S.Date>{post.when}</S.Date>
            </S.AuthorRight>
          </S.Author>
          <S.Upperimage>
            <S.Image>
              {post.images.length > 0 &&
                post.images.map((image) => (
                  <S.Imagedetail src={image.content} alt="" />
                ))}
            </S.Image>
          </S.Upperimage>
          
    
          <S.Context>{post.content}</S.Context>
        </S.Middlebox>
      </S.Middle>
      {/* <S.Bottom>
        <S.Commenter>
          <S.Commenterpic></S.Commenterpic>
          <S.Commentername>난여자</S.Commentername>
        </S.Commenter>

        <S.Comment>여기 존맛탱인거 진짜 인정ㅠㅠ</S.Comment>
      </S.Bottom>
      <S.Footer>
        <div className="input"></div>
        <div className="save">댓글</div>
      </S.Footer> */}
    </div>
  );
}

export default Detail;
