import React, {useContext, useState, useEffect} from 'react';
import Connect from '.';
import { ChkCoupleContext, CookieContext, SetChkCoupleContext } from '../../../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCheck } from '../../../hooks/useCheck';
import CreateProfile from '../CreateProfile';

// receiver에 대한 api요청을 먼저 한 후에 Connect컴포넌트를 보여주는 플로우가 적절
// Connect 컴포넌트가 보여지기 전, response를 먼저 받아온다. receiver: not me/ me / no 

const ChkResponse = () => {
    const navigate = useNavigate();

    const [response, setResponse] = useState("");
    const accessToken = useContext(CookieContext);
    const { check } = useCheck();

    
    useEffect(() => {
        if (check === "isBoth") {
            navigate("/")
        } else if (check !== "isProfile") {
            return <CreateProfile/>
        } else if (check !== "isCouple") {
            return <Connect />
        }
        }
    ,[])

    // useEffect(() => {
    //     axios({
    //         method: 'get',
    //         url: '/user-api/check/',
    //         headers: {
    //             "Authorization" : `Token ${accessToken.token}`,
    //         }
    //     })
    //         .then((res) => {
    //             console.log(res.data.isCouple)
    //             if (res.data.isCouple) {
    //                 navigate("/");
    //             } else {
    //                 <Connect response={response} />
    //             }
    //     })
    // })
    
    useEffect(() => {
        axios({
            method: 'get',
            url: "/network-api/request/",
            headers: {
                "Authorization": `Token ${accessToken.token}`
            }
        })
            .then((res) => {
                console.log(res)
                console.log({ response })
                setResponse(() => res.data.receiver)
            })
    },[])


   


    return (
        <div>
            <Connect response={response} />
        </div>
    );
};

export default ChkResponse;