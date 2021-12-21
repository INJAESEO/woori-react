import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChkCoupleContext, CookieContext, } from '../../../App';
import axios from 'axios';
import CreateProfile from '.';
import { useCheck } from '../../../hooks/useCheck';
import Connect from '../Connect';

function ChkProfile() {
    
    const navigate = useNavigate()
    const accessToken = useContext(CookieContext)
    const { check } = useCheck()
    
    useEffect(() => {
    if (check !== "isProfile") {
      navigate("/chkprofile")
    } else if (check !== "isCouple") {
      navigate("/chkresponse")
    } else if (check === "null") {
      navigate("/chkprofile")
    } else if (check === "isBoth") {
      navigate("/")
    }
  }, [])

    // useEffect(() => {
    //     axios({
    //         method: 'get',
    //         url: "/user-api/check/",
    //         headers: {
    //             "Authorization" : `Token ${accessToken.token}`
    //         }
    //     })
    //         .then((res) => {
    //             if (res.data.isProfile) {
    //                 return (
    //                     navigate("/chkresponse")
    //                 )
    //             } else {
    //                 return <CreateProfile />
    //             }
    //         })
    //         .catch((err) => {
    //         //  console.log(err.data.Err)
    //     })
    // }, [])

    // 컴포넌트 안에 return값 꼭 있어야 한다. 
        return (
            <div>
                <CreateProfile />
            </div>
        )
};

export default ChkProfile;