import React, { useContext, useEffect, useState } from "react";
import { CookieContext } from "../../App";
import Footer from "../common/Footer";
import Map from "./Map";
import PlusModal from "./PlusModal";
import Post from "./Post";
import axios from "axios";
import * as S from "./style";

function Home() {
  const [isPlusOpen, setIsPlusOpen] = useState(false);

  const [placePk, setPlacePk] = useState(0);
  const [placeList, setPlaceList] = useState(null);
  const accessToken = useContext(CookieContext);

  useEffect(() => {
    if (accessToken) {
      getPlaces();
    }
  }, [accessToken]);

  const getPlaces = async () => {
    await axios({
      method: "GET",
      url: `http://localhost:8000/post-api/place/?filter=all`,
      headers: {
        Authorization: `Token ${accessToken.token}`,
      },
    }).then((res) => {
      setPlaceList(() => res.data);
    });
  };
  if (!placeList) return <div>로딩중</div>;
  return (
    <>
      <PlusModal isOpen={isPlusOpen} setIsOpen={setIsPlusOpen} />
      <S.Container>
        <S.PlusButton onClick={() => setIsPlusOpen(true)}>+</S.PlusButton>
        <Map setPlace={setPlacePk} placeList={placeList} />
        <Post placePk={placePk} placeLength={placeList.length} />
      </S.Container>

      <Footer />
    </>
  );
}

export default Home;
