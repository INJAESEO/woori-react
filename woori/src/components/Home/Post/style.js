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
  // Chrome, Safari and Opera
  ::-webkit-scrollbar {
    display: none;
  }
  // IE and Edge
  -ms-overflow-style: none;
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
  font-size: 12px;
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
    border-radius: 50%;
    border: 1px solid lightGrey;
  }
  > p {
    margin: 0 30px;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    > p {
      font-weight: bold;
    }
  }
`;

export const PlaceCount = styled.div`
  font-size: 12px;
  font-weight: bold;
  > span {
    color: #a35414;
  }
`;

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
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 10px 10px 30px 10px rgba(230, 230, 230, 0.9);
  border-radius: 10px;
  width: 100%;
  padding: 20px;
  cursor: pointer;
  z-index: 100;
  > div {
    display: flex;
    align-items: start;
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
      font-size: 10px;
      margin-top: 10px;
    }
    .title {
      font-size: 14px;
    }
  }
  > h3 {
    margin: 0;
    > span {
      font-size: 12px;
      font-weight: bold;
    }
  }
  p {
    margin: 0;
  }
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 12px;
    margin-left: 20px;
    color: #696969;
  }
  > h3 {
    margin-top: 0;
  }
`;
