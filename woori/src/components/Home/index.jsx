import React, { useContext, useEffect, useState } from "react";
import { CookieContext } from "../../App";
import Footer from "../common/Footer";
import Map from "./Map";
import PlusModal from "./PlusModal";
import Post from "./Post";
import * as S from "./style";

function Home() {
  const [isPlusOpen, setIsPlusOpen] = useState(false);
  const [location, setLocation] = useState({
    latitude: 37.5898422803883,
    longitude: 127.031685000726,
  });
  const [place, setPlace] = useState("고려대학교 서울캠퍼스");
  const accessToken = useContext(CookieContext);
  useEffect(() => {
    console.log(accessToken);
  }, []);
  return (
    <>
      <PlusModal isOpen={isPlusOpen} setIsOpen={setIsPlusOpen} />
      <S.Container>
        <S.PlusButton onClick={() => setIsPlusOpen(true)}>+</S.PlusButton>
        <Map location={location} place={place} />
        <Post setLocation={Location} />
      </S.Container>

      <Footer />
    </>
  );
}

export default Home;
