import React, {useContext, useState, useEffect} from 'react';
import Connect from '.';
import { CookieContext } from '../../../App';
import axios from 'axios';

// receiver에 대한 api요청을 먼저 한 후에 Connect컴포넌트를 보여주는 플로우가 적절
// Connect 컴포넌트가 보여지기 전, response를 먼저 받아온다. receiver: not me/ me / no 

const ChkResponse = () => {
    const [response, setResponse] = useState("");
    const accessToken = useContext(CookieContext);
    
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
                setResponse(() => res.data.receiver)
            })
    },[])

    return (
        <div>
            <Connect response={response}/>
        </div>
    );
};

export default ChkResponse;