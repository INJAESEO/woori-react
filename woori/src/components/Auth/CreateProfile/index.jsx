import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"

function CreateProfile() {
    
    const [profileImg, setProfileImg] = useState(null)
    const [nickname, setNickname] = useState("")
    const [gender, setGender] = useState("")
    const navigate = useNavigate();


    const createProfile = async (profileData) => {
        axios({
            method: 'POST',
            url: "/user-api/profile",
            data: profileData,
            withCredentials: true,
        })
            .then((res) => {
            console.log(res)
            }).then(() => navigate("/connect"))
        .catch((err)=>{console.log(err)})
    }

    function onSubmitHandler(e) {
        e.preventDefault()

        let profileData = {
            nickname: nickname,
            gender: gender,
        }
        if (nickname === "") {
            alert("닉네임을 입력해주세요")
            return false
        } else {
            return createProfile(profileData)
        }
        
    }


    function onImgUploadHandler(e) {
        const imgFile = e.target.files[0];
        const imgUrl = URL.createObjectURL(imgFile);
        setProfileImg(imgUrl)
    }

    return (
        <div>
            <h3>연결성공! 프로필을 입력해주세요</h3>
            {/* src속성에 state를 부여하여 미리보기  */}
            <img src={profileImg} alter="프로필사진입니다."/>
            <form onSubmit={onSubmitHandler}>
                <input type="file"
                    accept="image/*"
                    name="profileImg"
                    onChange={onImgUploadHandler}
                ></input>
                <input type="text" placeholder="닉네임" onChange={(e)=>{setNickname(e.target.value)}}></input>
                <select onChange={(e)=>{setGender(e.target.value)}}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
                <button>가입완료</button>
            </form>
        </div>
    );
};

export default CreateProfile;