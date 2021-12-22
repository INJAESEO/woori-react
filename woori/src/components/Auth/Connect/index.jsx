import React, { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import {
  ChkCoupleContext,
  CookieContext,
  SetChkCoupleContext,
} from "../../../App";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { checkState } from "../../../utils/atoms";

function Connect({ response }) {
  const accessToken = useContext(CookieContext);

  const [request, setRequest] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [idCode, setIdCode] = useState("");
  const [partnerIdCode, setPartnerIdCode] = useState("");
  const [isCouple, setIsCouple] = useState("");
  const idCodeInput = useRef("");
  const navigate = useNavigate();
  const setCheck = useSetRecoilState(checkState);

  // id code를 받아온다.
  useEffect(() => {
    axios({
      method: "get",
      url: "user-api/profile/",
      headers: {
        Authorization: `Token ${accessToken.token}`,
      },
    }).then((res) => {
      // console.log(res.data.profile_data.id_code)
      setIdCode(() => res.data.profile_data.id_code);
    });
  }, []);

  useEffect(() => {
    console.log(idCode);
  }, [idCode]);

  function onSubmitHandler() {
    axios({
      method: "post",
      url: "/network-api/request/",
      headers: {
        Authorization: `Token ${accessToken.token}`,
      },
      data: {
        id_code: idCodeInput.current.value,
      },
    })
      .then((res) => {
        // console.log(res.data)
        alert(res.data.Succ);
        window.location.reload(true);
      })
      .catch((err) => {
        alert(err.response.data.Err);
        console.dir(err);
      });
  }

  // if (isLoading) {
  //     return <div>로딩중!</div>//로딩중에 보여줄 컴포넌트(common)
  // } else

  if (response === "not_me") {
    return (
      <div>
        <p>상대방에게 보낸 요청을 기다리고 있습니다</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            axios({
              method: "delete",
              url: "network-api/request/",
              headers: {
                Authorization: `Token ${accessToken.token}`,
              },
            })
              .then((res) => {
                console.log(res);
                window.location.reload(true);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          취소
        </button>
      </div>
    );
  } else if (response === "me") {
    return (
      <div>
        <p>상대방이 커플신청을 했습니다</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            axios({
              method: "post",
              url: "network-api/couplenet/",
              headers: {
                Authorization: `Token ${accessToken.token}`,
              },
            })
              .then((res) => {
                console.log(res.statusText);

                alert("커플이 맺어졌습니다. 환영합니다!");
                setCheck(() => "isCouple");

                // setChkCouple(() => res.statusText)
              })
              .then(() => navigate("/"))
              .catch((err) => {
                console.log(`수락 실패${err}`);
              });
          }}
        >
          수락
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            axios({
              method: "delete",
              url: "network-api/request/",
              headers: {
                Authorization: `Token ${accessToken.token}`,
              },
            })
              .then((res) => {
                console.log(res);
                window.location.reload(true);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          취소
        </button>
      </div>
    );
  }
  return (
    <div>
      <h3>서로의 초대코드를 입력하여 연결해주세요</h3>
      <form>
        <p>{idCode}</p>
        <input
          type="text"
          placeholder="상대방의 초대코드를 입력해주세요"
          ref={idCodeInput}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            onSubmitHandler();
          }}
        >
          연결하기
        </button>
      </form>
    </div>
  );
}

export default Connect;
