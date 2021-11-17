import React, { useState, useContext, createContext} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { CookieContext } from '../../../App';




function CreateProfile() {
    
    const [profileImg, setProfileImg] = useState()
    const [previewImg, setPreviewImg] = useState()
    const [nickname, setNickname] = useState("")
    const selectList = ["man", "woman"]
    // select에서는 디폴트값이 필요하다
    const [selected, setSelected] = useState("man")
    const navigate = useNavigate();

    const accessToken = useContext(CookieContext)
    

   

    const createProfile = async (profileData) => {
        

        axios({
            method: 'POST',
            url: "/user-api/profile/",
            data: profileData,
            withCredentials: true,
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "multipart/form-data"
            },
        })
            .then((res) => {
            console.log(res)
            }).then(() => navigate("/connect"))
        .catch((err)=>{console.log(err)})
    }
    
    function onSelectionHandler (e) {
        setSelected(e.target.value)
    }

    function onImgUploadHandler(e) {
        const imgFile = e.target.files[0];
        const imgUrl = URL.createObjectURL(imgFile);
        setProfileImg(imgFile)
        setPreviewImg(imgUrl)
    }

    function onSubmitHandler(e) {
        e.preventDefault()

        // const imgData = new FormData();
        // imgData.append("profileImg", profileImg)

        let profileData = {
            nickname: nickname,
            gender: selected,
            profile_img: profileImg
        }
        if (nickname === "") {
            alert("닉네임을 입력해주세요")
            return false
        } else {
            return createProfile(profileData)
        }
        
    }


  
    return (
        <div>
            <h3>연결성공! 프로필을 입력해주세요</h3>
          
            {/* src속성에 state를 부여하여 미리보기  */}
            <img src={previewImg} alter="프로필사진입니다."/>
            <form onSubmit={onSubmitHandler}>
                <input type="file"
                    accept="image/*"
                    name="profileImg"
                    onChange={onImgUploadHandler}
                ></input>
                <input type="text" placeholder="닉네임" onChange={(e)=>{setNickname(e.target.value)}}></input>
                <select onChange={onSelectionHandler}>
                    {/* <option value="남자">남자</option>
                    <option value="여자">여자</option> */}
                    {selectList.map((i) => {
                        return(<option value={i} key={i}>{i}</option>)
                    })}
                </select>
                <button>가입완료</button>
            </form>
        </div>
    );
};

export default CreateProfile;