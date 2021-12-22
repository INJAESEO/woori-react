import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50vh;
  background-color: white;
  border-radius: 16px 16px 0 0;
  position: absolute;
  bottom: 0;
  overflow: auto;
  z-index: 10;
  padding-bottom: 60px;
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
  img {
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

export const PostListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  a {
    text-decoration: none;
    color: black;
  }
`;

export const PostContainer = styled.div`
  background-color: #e6e6e6;
  border-radius: 12px;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  z-index: 100;
  > div {
    display: flex;
    align-items: center;
    > img {
      width: 110px;
      height: 110px;
      border-radius: 6px;
      margin-right: 10px;
    }
    .content {
      max-height: 90px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
    }
  }
  > h3 {
    margin: 0;
    > span {
      font-size: 12px;
      font-weight: normal;
    }
  }
  p {
    margin: 0;
  }
`;
