import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import * as S from "./style";
import axios from 'axios';
import { CookieContext } from "../../../App";
// import { useParams } from "react-router-dom";



function List () {
    const navigate = useNavigate ();
    const [한마디, 한마디변경] = useState ('');
    const [list, listedit] = useState ([]);
    const [date, setDate] = useState ('');

    const accessToken = useContext(CookieContext);

    useEffect(() => {
        if (accessToken) {
          getList();
        }
    }, [accessToken]);

    const getList = async () => {
        await axios ({
            method: "GET",
            url: `http://localhost:8000/post-api/post/?filter=when&value=2021-12-21`,
            headers: {
                Authorization: `Token ${accessToken.token}`,
            },
        }).then((res) => {
            console.log(res.data)
            listedit(() => res.data)
        });
    }

    return (
        <S.Container>
            <S.Top>
                <S.Header>
                    <S.Date>
                        
                    </S.Date>
                    <S.Calendar>
                        <input type="date"></input>
                        
                    </S.Calendar>
                </S.Header>
            </S.Top>
            <S.Middle>
                <div>
                    <S.Button onClick ={() => navigate( "/new") }> + 핫 플레이스 추가</S.Button>
                    <S.Button onClick> + 오늘의 한 마디 </S.Button>
                </div>
                <div>
                    {/* <input onChange={ (e)=> { 한마디변경(e.target.value) } } /> */}
                </div>
                <div>
                    <div className="profileimage"></div>
                    <div className="todaysword"></div>
                        
                </div>
            </S.Middle>
            <S.Main>
                {list.map((element) => (
                    <S.Mainbox onClick = {() => navigate(`/posts/${element.id}`)}>
                    <div className="first">
                        <S.Title>
                            {element.title}
                        </S.Title>
                        <S.Placeinfo>
                            <S.Address>
                                {element.place.name}
                            </S.Address>
                            <S.Type>
                                {element.place.category}
                            </S.Type>
                        </S.Placeinfo>
                    </div>
                    <S.Second>
                 
                        <S.Image src={element.images[0]} alt="" />
                        {/* <S.Image src={element.images[0].content} alt="" /> */}
                            
                        <S.Context>
                            {element.content}
                        </S.Context>
                    </S.Second>
                    <S.Third>
                        <S.Profile src={element.author.profile_img}></S.Profile>
                        <S.Name>
                            {element.author.nickname}
                        </S.Name>
                    </S.Third>
                </S.Mainbox>    
                ))}
            </S.Main>
        </S.Container>
        
    )
};

export default List;