import { useContext, useEffect } from "react";
import { useRecoilState } from "recoil";
import { checkState } from "../utils/atoms";
import axios from "axios";
import { CookieContext } from "../App";

export const useCheck = () => {
  const [check, setCheck] = useRecoilState(checkState);
  const accessToken = useContext(CookieContext);

  const setCheckStatus = (data) => {
    if (data?.isProfile && data?.isCouple) {
      setCheck("isBoth");
      return;
    }
    if (data?.isProfile) {
      setCheck("isProfile");
      return;
    }
    if (data?.isCouple) {
      setCheck("isCouple");
      return;
    }
    setCheck("isNone");
  };

  const getCheckStatus = async () => {
    await axios({
      method: "GET",
      url: `http://localhost:8000/user-api/check/`,
      headers: {
        Authorization: `Token ${accessToken.token}`,
      },
    }).then((res) => {
      setCheckStatus(res.data);
    });
  };

  useEffect(() => {
    if (accessToken) {
      getCheckStatus();
    }
  }, [accessToken]);

  return { check: check };
};
