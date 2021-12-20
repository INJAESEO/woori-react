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
  const [location, setLocation] = useState({
    latitude: 37.5898422803883,
    longitude: 127.031685000726,
  });
  const [place, setPlace] = useState(0);
  const [placeList, setPlaceList] = useState([]);
  const accessToken = useContext(CookieContext);
  useEffect(() => {
    if (accessToken) {
      getPlaces();
    }
  }, [accessToken]);

  useEffect(() => {
    console.log(place);
  }, [place]);

  const getPlaces = async () => {
    await axios({
      method: "GET",
      url: `http://localhost:8000/post-api/place/?filter=all`,
      headers: {
        Authorization: `Token ${accessToken.token}`,
      },
    }).then((res) => {
      setPlaceList(() => res.data);
      console.log(res.data);
    });
  };
  return (
    <>
      <PlusModal isOpen={isPlusOpen} setIsOpen={setIsPlusOpen} />
      <S.Container>
        <S.PlusButton onClick={() => setIsPlusOpen(true)}>+</S.PlusButton>
        <Map location={location} setPlace={setPlace} placeList={placeList} />
        <Post place={place} />
      </S.Container>

      <Footer />
    </>
  );
}

export default Home;
