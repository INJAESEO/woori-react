import React, { useState } from "react";
import Footer from "../common/Footer";
import Map from "./Map";
import Post from "./Post";
import * as S from "./style";

function Home() {
  return (
    <>
      <S.Container>
        <S.PlusButton>+</S.PlusButton>
        <Map />
        <Post />
      </S.Container>

      <Footer />
    </>
  );
}

export default Home;
