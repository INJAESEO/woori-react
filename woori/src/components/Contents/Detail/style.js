import styled from "styled-components";

export const Back = styled.div`
  width: 100%;
  height: 35px;
  border-bottom: 0.5px solid gray;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Title = styled.div`
  font-size: 23px;
  font-weight: 900;
  display: flex;
  justify-content: center;
`;

export const Info = styled.div`
  width: 100%;
  font-size: 15px;
  padding-left: 18px;
  padding-right: 18px;
  margin-top: 15px;
  color: gray;
`;

export const InfoTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Placename = styled.div`
  color: black;
  font-size: 17px;
  margin-right: 10px;
`;

export const Category = styled.div`
  color: #696969;
  font-size: 12px;
`;
export const Nthvisit = styled.div`
  color: #a58989;
  font-size: 15px;
`;

export const Rating = styled.div`
  font-size: 14px;
  color: #696969;
  margin-left: 5px;
  padding-top: 3px;
`;

export const Middle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 15px;
`;

export const Middlebox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 12px;
`;

export const Author = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Profilepic = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 30px;

  margin-right: 15px;
`;

export const AuthorRight = styled.div``;

export const Profilename = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: bold;
`;

export const Date = styled.div`
  width: 100%;
  font-size: 12px;
  color: gray;
`;

export const Upperimage = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: left;
`;

export const Image = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  overflow: scroll;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  // IE and Edge
  -ms-overflow-style: none;
`;

export const Imagedetail = styled.img`
  width: auto;
  max-width: 300px;
  height: calc(80vw);
  max-height: 300px;

  border-radius: 10px;
  background-color: black;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 7px;
`;

export const Context = styled.div`
  width: 100%;
  font-size: 16px;
  color: #595959;
`;

export const Bottom = styled.div`
  width: 95%;
  padding: 20px;
`;

export const Commenter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Comment = styled.div`
  font-size: 15px;
`;

export const Commenterpic = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 30px;
  background-color: black;
  margin-right: 15px;
`;

export const Commentername = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

export const Footer = styled.div`
  width: 100%;
  height: 30px;
  background-color: gray;
  position: fixed;
`;
