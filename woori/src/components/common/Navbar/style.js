import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 52px;
  opacity: 1;
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
  ${(props) =>
    props.isOpen &&
    css`
      height: 0;
      opacity: 0;
      overflow: auto;
    `}

  transition: all 0.3s;
`;
