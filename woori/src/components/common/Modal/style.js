import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  text-align: center;
  margin: auto;
  max-width: 375px;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);

  & > div {
    display: inline-block;
    background: white;
    width: 100%;
    border-radius: 12px;
    user-select: none;
    z-index: 1012;
    position: relative;
    max-width: 420px;
  }
`;

export const CloseModalButton = styled.button`
  position: absolute;
  right: 3%;
  top: 3%;
  background: transparent;
  border: none;
  color: gray;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 22px;
  }
`;
