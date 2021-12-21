import { useContext, useEffect } from "react";
import { useRecoilState } from "recoil";
import { profileState } from "../utils/atoms";
import axios from "axios";
import { CookieContext } from "../App";

export const useProfile = () => {
  const [profile, setProfile] = useRecoilState(profileState);
  const accessToken = useContext(CookieContext);

  const getProfile = async () => {
    await axios({
      method: "GET",
      url: `http://localhost:8000/user-api/profile/?type=couple`,
      headers: {
        Authorization: `Token ${accessToken.token}`,
      },
    }).then((res) => {
      setProfile(() => res.data.profile_data);
    });
  };

  useEffect(() => {
    if (accessToken) {
      getProfile();
    }
  }, [accessToken]);

  return { profile: profile };
};
