import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 52px;
  padding-right: 20px;
  padding-left: 20px;
  max-width: 375px;
  position: fixed;
  top: 0px;
  background-color: white;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: bold;

  > .logo {
    font-size: 16px;
    color: black;
  }
`;
