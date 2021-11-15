import React from 'react';
import {Link} from 'react-router-dom'
function Welcome (){
    return (
        <div>
            <h1>우리두리</h1>
            <h3>커플들의 데이트 코스 기록 공간</h3>
            <Link to='/signup'><button type="button">회원가입하기</button></Link>
        </div>
    );
};

export default Welcome;