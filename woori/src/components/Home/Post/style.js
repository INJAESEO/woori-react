import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50vh;
  background-color: white;
  border-radius: 16px 16px 0 0;
  position: absolute;
  bottom: 0;
  overflow: hidden;
  z-index: 10;
  ${(props) =>
    props.isOpen &&
    css`
      height: 90vh;
      overflow: auto;
    `}

  transition: height 0.3s;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
`;

export const Header = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Dday = styled.p`
  margin: 0;
  cursor: pointer;
  z-index: 120;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
  }
  > p {
    margin: 0 30px;
  }
`;

export const PlaceCount = styled.div``;
