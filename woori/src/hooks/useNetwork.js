import { useContext, useEffect } from "react";
import { useRecoilState } from "recoil";
import { networkState } from "../utils/atoms";
import axios from "axios";
import { CookieContext } from "../App";

export const useNetwork = () => {
  const [network, setNetwork] = useRecoilState(networkState);
  const accessToken = useContext(CookieContext);

  const getNetwork = async () => {
    await axios({
      method: "GET",
      url: `http://localhost:8000/network-api/couplenet/`,
      headers: {
        Authorization: `Token ${accessToken.token}`,
      },
    }).then((res) => {
      setNetwork(() => res.data);
    });
  };

  useEffect(() => {
    if (accessToken) {
      getNetwork();
    }
  }, [accessToken]);

  return { network: network };
};
