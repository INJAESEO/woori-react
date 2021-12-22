import React, { useContext } from 'react';
import axios from 'axios';
import { CookieContext } from '../../../../App';
import * as S from './style'
import { useNavigate } from 'react-router-dom';


const Response = () => {
    const accessToken = useContext(CookieContext);
    const navigate = useNavigate();

    function onSubmitHandler(e) {
        e.preventDefault();
                    axios({
                        method: 'post',
                        url: 'network-api/couplenet/',
                        headers: {
                            "Authorization": `Token ${accessToken.token}`
                        }
                    })
                        .then((res) => {
                            console.log(res.statusText);
                            
                            alert("커플이 맺어졌습니다. 환영합니다!")
                            navigate("/")        
                        })
                        .catch((err) => {
                        // console.log(`수락 실패${err}`)
                    })
    }

    function onDeleteHandler(e) {
        e.preventDefault();
                    axios({
                        method: 'delete',
                        url: 'network-api/request/',
                        headers: {
                            "Authorization": `Token ${accessToken.token}`
                        }
                    })
                        .then((res) => {
                            // console.log(res)
                            window.location.reload(true);
                        })
                        .catch((err) => {
                        // console.log(err)
                    })
    }

    return (
        <div>
            <S.Msg>상대방이 커플신청을 했습니다</S.Msg>
            <S.Container>
                <S.Button onClick={onSubmitHandler}>수락</S.Button>
                <S.Button onClick={onDeleteHandler}>취소</S.Button>
            </S.Container>
        </div>
    );
};

export default Response;