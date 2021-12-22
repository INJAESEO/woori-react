import React, { useContext } from 'react';
import * as S from './style'
import axios from 'axios';
import { CookieContext } from '../../../../App';

const Request = () => {
    const accessToken = useContext(CookieContext);

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
                            console.log(res)
                            window.location.reload(true);
                        })
                        .catch((err) => {
                        console.log(err)
                    })
    }

    return (
        <div>
            <S.Msg>연인의 응답을 기다리는 중입니다</S.Msg>
                <S.Button onClick={onDeleteHandler}>취소</S.Button>
        </div>
    );
};

export default Request;