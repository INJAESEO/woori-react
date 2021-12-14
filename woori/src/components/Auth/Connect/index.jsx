import React, { useContext, useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { CookieContext } from '../../../App';




function Connect({response}) {
    const [request, setRequest] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [idCode, setIdCode] = useState("");
    const [partnerIdCode, setPartnerIdCode] = useState("");
    const accessToken = useContext(CookieContext);
    const idCodeInput = useRef("");
    
    useEffect(() => {
        axios({
            method: 'get',
            url: 'user-api/profile/',
            headers: {
                "Authorization": `Token ${accessToken.token}`
            }
        })
            .then((res) => {
                console.dir(res)
                setIdCode(()=>res.data.profile_data.id_code)
        })
    },[])

    useEffect(() => {
        axios({
            method: 'get',
            url: 'network-api/request/',
            headers: {
                "Authorization": `Token ${accessToken.token}`
            }
        })
            .then((res) => {
                console.dir(res)
                setRequest(() => res.data.receiver)
                setIsLoading(false);
        })
    },[])


    
    // GET 요청시에는 로딩에 대한 useEffect 적용
    // data가 있다면, false로바꾸고 return JSX
    // data 없다면, isLoading= true 상태이고 if문 적용
    useEffect(() => {
        if (request) {
            return setIsLoading(false)
        }
    }, [request])

    function onSubmitHandler() {

        console.log("fff")
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
            console.dir(err)
        })
    }




    if (isLoading) {
        return <div>로딩중!</div>//로딩중에 보여줄 컴포넌트(common)
} else if (request === "no") {
        return (
        <div>
            <h3>서로의 초대코드를 입력하여 연결해주세요</h3>
            <form >
                {/* <input type="text" value={idCode}></input> */}
                <p>{idCode}</p>
                <input type="text" placeholder="상대방의 초대코드를 입력해주세요" ref={idCodeInput}></input>
                <button onClick={(e) => {
                    e.preventDefault()
                    onSubmitHandler()
                }}>연결하기</button>
            </form>
        </div>
    );
    } else if (request === "not_me") {
        return <p>내가 보냄</p>
    } else if (request === "me") {
        return <p>너가 보냄</p>
    }
    
};

export default Connect;