import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  position: relative;
`;

export const PlusButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 55px;
  right: 24px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  font-size: 32px;
`;
