import React, { useState } from "react";
import { useNavigate } from "react-router";
import * as S from "./style";
// import { useParams } from "react-router-dom";



function List () {
    const navigate = useNavigate ();
    let [한마디, 한마디변경] = useState ('');


    return (
        <S.Container>
            <S.Top>
                <S.Header>
                    <S.Date>
                        2020.10.13
                    </S.Date>
                    <S.Calendar>
                        calendar
                    </S.Calendar>
                </S.Header>
            </S.Top>
            <S.Middle>
                <div>
                    <S.Button onClick ={() => navigate( "/new") }> + 핫 플레이스 추가</S.Button>
                    <S.Button onClick> + 오늘의 한 마디 </S.Button>
                </div>
                <div>
                    <input onChange={ (e)=> { 한마디변경(e.target.value) } } />
                </div>
                <div>
                    <div className="profileimage"></div>
                    <div className="todaysword"></div>
                        
                </div>
            </S.Middle>
            <S.Main>
                <S.Mainbox>
                    <div className="first">
                        <S.Title>
                            너무나도 즐거웠던 이태리총각
                        </S.Title>
                        <S.Placeinfo>
                            <S.Address>
                                서울시 성북구 안암동
                            </S.Address>
                            <S.Type>
                                식당
                            </S.Type>
                        </S.Placeinfo>
                        
                    </div>
                    <S.Second>
                        <S.Image>
                            hi
                        </S.Image>
                        <S.Context>
                            우리가 벌써 3번째로 방문한 '이태리총각'!!!
                            역시나 너무너무 맛있었당 ㅎㅎㅎㅎ여기는 파스타보다도 샐러드가 정말 맛있다
                            다음에 또 오자!
                        </S.Context>
                    </S.Second>
                    <S.Third>
                        <S.Profile>
                            
                        </S.Profile>
                        <S.Name>
                            서인재
                        </S.Name>
                    </S.Third>
                </S.Mainbox>
                <S.Mainbox>

                </S.Mainbox>
            </S.Main>
        </S.Container>
        
    )
};

export default List;