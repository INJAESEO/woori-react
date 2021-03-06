import { Children } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyleWrapper = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    padding: 0;
    margin: 0;
  }

  body { 
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

const Container = styled.div`
  position: relative;

  @media (min-width: 375px) {
    background-color: lemonchiffon;
  }
`;

const Body = styled.div`
  max-width: 375px;
  margin: 0 auto;
  background-color: white;

  min-height: 100vh;
`;

function GlobalStyle({ children }) {
  return (
    <>
      <GlobalStyleWrapper />
      <Container>
        <Body>{children}</Body>
      </Container>
    </>
  );
}

export default GlobalStyle;
