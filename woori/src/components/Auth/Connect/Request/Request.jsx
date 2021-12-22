import React, { useContext, useEffect } from 'react';
import * as S from './style'
import axios from 'axios';
import { CookieContext } from '../../../../App';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { checkState } from '../../../../utils/atoms';
import { useNavigate } from 'react-router-dom';
import { useCheck } from '../../../../hooks/useCheck';

const Request = () => {
    const accessToken = useContext(CookieContext);
    const [check, setCheck] = useRecoilState(checkState);
    const navigate = useNavigate();

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