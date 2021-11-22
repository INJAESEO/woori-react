import React, { useState, useContext, createContext} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { CookieContext } from '../../../App';
import Connect from '../Connect';




function CreateProfile() {
    
    const [profileImg, setProfileImg] = useState()
    const [previewImg, setPreviewImg] = useState()
    const [nickname, setNickname] = useState("")
    const [idCode, setIdCode] = useState("")
    const selectList = ["man", "woman"]
    // select에서는 디폴트값이 필요하다
    const [selected, setSelected] = useState("man")
    const navigate = useNavigate();

    const accessToken = useContext(CookieContext)

    // export const idContext = createContext()
    

    // console.log(accessToken.token)

    const createProfile = async (formData) => {
        

        axios({
            method: 'POST',
            url: "/user-api/profile/",
            data: formData,
            headers: {
                "Authorization": `Token ${accessToken.token}`,
                "Content-Type": "multipart/form-data"
            },
            withCredentials: true,
        })
            .then((res) => {
                // Response 로 생성된 id_code 값을 state에 저장
                console.log(res.data.id_code)
                setIdCode(() => res.data.id_code)
                console.log(idCode)
                //  
            })
            .then(() => navigate("/connect2"))
            // .then((res) => {
            //     // console.log(res.data.id_code)
            // })
            .catch((err) => {
                // 이미프로필있는 경우도 생각하자 !
                if (formData.profile_img === undefined) {
                    alert("프로필 사진을 올려주세요")
                } 
            })
    }

    
    function onSelectionHandler (e) {
        setSelected(e.target.value)
    }

    function onImgUploadHandler(e) {
        // 프로필 이미지 state 저장
        const imgFile = e.target.files[0];
        setProfileImg(imgFile)
        console.log(e.target.files[0])

        // 이미지 미리보기
        const imgUrl = URL.createObjectURL(imgFile);
        // console.log(`FUCK ${profileImg}`)
        setPreviewImg(imgUrl)
    }

    function onSubmitHandler(e) {
        e.preventDefault()

        // 이미지 포함된 전체 데이터를 FormData로 wrap
        const formData = new FormData();
        formData.append("gender", selected)
        formData.append("nickname", nickname)
        formData.append("profile_img", profileImg)

        if (nickname === "") {
            alert("닉네임을 입력해주세요")
            return false
        } else {
            return createProfile(formData)
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