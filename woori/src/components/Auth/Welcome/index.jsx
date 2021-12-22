import React from 'react';
import { Link } from 'react-router-dom'
import * as S from './style'
function Welcome (){
    return (
        <div>
            <S.Title>우리두리</S.Title>
            <S.Paragraph>둘만의 데이트 아카이브</S.Paragraph>


            <S.Container>
                <Link to='/signup'><S.Button type="button">회원가입하기</S.Button></Link>
                <S.Description>계정이 있으신가요?<Link to='/login' style={{ textDecoration: 'none'}}><S.Text>로그인</S.Text></Link></S.Description>
            </S.Container>
        </div>
    );
};

export default Welcome;