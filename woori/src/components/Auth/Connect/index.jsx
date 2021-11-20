import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CookieContext } from '../../../App';


function Connect() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [idCode, setIdCode] = useState("");
    const accessToken = useContext(CookieContext);

// 컴포넌트 생성할 때 실행되는 useEffect
    useEffect(() => {
        
        // 직관적으로 보여주기 위해 config 설정
        axios({
            method: 'get',
            url: "/network-api/request/",
            headers: {
                "Authorization": `Token ${accessToken.token}`
            }
        })
            .then((res) => {
                // 비동기함수(state변경함수)안에는 콜백함수를 써준다
                setData(() => res)
                console.log(res)
                if (res.data.receiver === "me") {
                    // 모달창 띄운다
                } else if (res.data.receiver !== "me") {
                    // 모달창 띄운다
                }
            }).catch((err) => {
                console.log(err)
                alert("서버에서 에러가 발생했습니다")
            })
        
    }, [])
    
    // GET 요청시에는 로딩에 대한 useEffect 적용
    // data가 있다면, false로바꾸고 return JSX
    // data 없다면, isLoading= true 상태이고 if문 적용
    useEffect(() => {
        if (data) {
            return setIsLoading(false)
        }
    }, [data])
    
    if (isLoading) {
        return <div>로딩중!</div>//로딩중에 보여줄 컴포넌트(common)
    } 
    return (
        <div>
            <h3>서로의 초대코드를 입력하여 연결해주세요</h3>
            <form>
                <input type="text" ></input>
                <input type="text" placeholder="상대방의 초대코드를 입력해주세요"></input>
                <button>연결하기</button>
            </form>
        </div>
    );
};

export default Connect;