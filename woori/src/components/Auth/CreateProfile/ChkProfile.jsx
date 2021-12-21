import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChkCoupleContext, CookieContext, } from '../../../App';
import axios from 'axios';
import CreateProfile from '.';

function ChkProfile() {
    
    const navigate = useNavigate()



    const accessToken = useContext(CookieContext)

    useEffect(() => {
        axios({
            method: 'get',
            url: "/user-api/check/",
            headers: {
                "Authorization" : `Token ${accessToken.token}`
            }
        })
            .then((res) => {
                if (res.data.isProfile) {
                    return (
                        navigate("/chkresponse")
                    )
                } else {
                    return <CreateProfile />
                }
            })
            .catch((err) => {
            //  console.log(err.data.Err)
        })
    }, [])

    // 컴포넌트 안에 return값 꼭 있어야 한다. 
        return (
            <div>
                <CreateProfile />
            </div>
        )
};

export default ChkProfile;