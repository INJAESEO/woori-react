import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 375px;
  height: 52px;
  position: fixed;
  bottom: 0;
  margin: auto;
  background-color: white;

  z-index: 100;

  display: flex;
  justify-content: space-around;
  align-items: center;

  box-shadow: 0 -3px 6px -6px gray;
`;

export const Section = styled.div`
  margin: auto;
  align-items: center;
  cursor: pointer;

  > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-decoration: none;
    align-items: center;
  }

  svg {
    width: 20px;
    height: 20px;
    > path {
      fill: ${({ isHome }) => (isHome ? "black" : "#8C94A4")};
    }
  }

  > a > div {
    font-size: 14px;
    text-align: center;
    margin-top: 4px;
    color: ${({ isHome }) => (isHome ? "black" : "#8C94A4")};
  }
`;

export const Divider = styled.div`
  height: 24px;
  width: 1px;
  background-color: rgba(41, 41, 41, 0.4); ;
`;
