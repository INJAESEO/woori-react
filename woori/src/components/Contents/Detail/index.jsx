import React from "react";
import * as S from "./style";

function Detail () {
    return (
        <div>
            <S.Back>
            </S.Back>
            <S.Header>
                <S.Title>
                    너무나도 즐거웠던 이태리총각
                </S.Title>
                <S.Info>
                    <div className="Nthvisit">
                        3번째 방문
                    </div>
                    <div className="rating">
                        별점
                    </div>
                </S.Info>
            </S.Header>
            <S.Middle>
                <S.Middlebox>
                    <S.Author>
                        <S.Profilepic>
                        </S.Profilepic>
                        <S.AuthorRight>
                            <S.Profilename>
                                서인재
                            </S.Profilename>
                            <S.Date>
                                2021.10.13
                            </S.Date>
                        </S.AuthorRight>
                        
                    </S.Author>
                    <S.Image>
                        <S.Imagedetail>
                        
                        </S.Imagedetail>
                        <S.Imagedetail>
                            
                        </S.Imagedetail>
                    </S.Image>
                    
                    <S.Context>
                        우리가 벌써 3번째로 방문한 '맛있는 식당'!!!
                        역시나 너무너무 맛있었당 ㅎㅎㅎㅎ
                        여기는 파스타보다도 샐러드가 정말 맛있다
                        다음에 또 오자!
                    </S.Context>
                </S.Middlebox>
                
            </S.Middle>
            <S.Bottom>
                <S.Commenter>
                    <S.Commenterpic>
                    </S.Commenterpic>
                    <S.Commentername>
                        난여자
                    </S.Commentername>
                </S.Commenter>
                
                <S.Comment>
                    여기 존맛탱인거 진짜 인정ㅠㅠ
                </S.Comment>
            </S.Bottom>
            <S.Footer>
                <div className="input">

                </div>
                <div className="save">
                    댓글
                </div>
            </S.Footer>
            
        </div>
    )
};

export default Detail;