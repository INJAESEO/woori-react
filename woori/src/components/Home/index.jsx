import React, { useContext, useEffect, useState } from "react";
import { CookieContext } from "../../App";
import Footer from "../common/Footer";
import Map from "./Map";
import PlusModal from "./PlusModal";
import Post from "./Post";
import * as S from "./style";

function Home() {
  const [isPlusOpen, setIsPlusOpen] = useState(false);
  const accessToken = useContext(CookieContext);
  useEffect(() => {
    console.log(accessToken);
  }, []);
  return (
    <>
      <PlusModal isOpen={isPlusOpen} setIsOpen={setIsPlusOpen} />
      <S.Container>
        <S.PlusButton onClick={() => setIsPlusOpen(true)}>+</S.PlusButton>
        <Map />
        <Post />
      </S.Container>

      <Footer />
    </>
  );
}

export default Home;
