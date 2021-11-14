import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    max-width: 375px;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

export default GlobalStyle;
