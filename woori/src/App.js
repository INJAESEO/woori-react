import React, { useState } from "react";
import Router from "./pages/Router";
import { createGlobalStyle } from "styled-components";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
