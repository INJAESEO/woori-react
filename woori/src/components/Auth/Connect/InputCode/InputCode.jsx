import React, { useContext, useRef } from 'react';
import axios from 'axios';
import * as S from './style'
import { CookieContext } from '../../../../App';

const InputCode = ({idCodeInput, idCode}) => {
    const accessToken = useContext(CookieContext);

    function onSubmitHandler(e) {
        e.preventDefault();
        axios({
            method: 'post',
            url: '/network-api/request/',
            headers: {
                'Authorization':`Token ${accessToken.token}`,
            },
            data: {
                id_code: idCodeInput.current.value
            }
        })
            .then((res) => {
                // console.log(res.data)
                alert(res.data.Succ)
                window.location.reload(true);

            })
            .catch((err) => {
                alert(err.response.data.Err)
            // console.dir(err)
        })
    }

    return (
        <div>
            <S.Title>상대방의 초대코드를 입력하여 연결해주세요</S.Title>
            <S.Form >
                <S.Container>
                    <S.Label for="idcode">내 초대코드</S.Label>
                    <S.IdCode>{idCode}</S.IdCode>
                </S.Container>
                <S.Container>
                    <S.Label for="partnerIdCode">상대방의 코드를 입력해주세요</S.Label>
                    <S.Input type="text" ref={idCodeInput}></S.Input>
                </S.Container>
                <S.Button onClick={onSubmitHandler}>연결하기</S.Button>
            </S.Form>
        </div>
    );
};

export default InputCode;