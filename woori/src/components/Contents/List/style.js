import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 52px;
`;

export const Top = styled.div`
  width: 100%;
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const Date = styled.p`
  font-size: 25px;
  font-weight: bold;
`;

export const Calendar = styled.p`
  font-size: 2vh;
  input {
    border: none;
    font-size: 17px;
    font-weight: bold;
  }
`;

export const Middle = styled.div`
  width: 100%;
`;
export const Button = styled.button`
  border: none;
  background: none;
  padding-bottom: 5px;
  font-size: 15px;
`;
export const Bubble = styled.input`
  border: none;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Mainbox = styled.div`
  width: 95%;

  margin-top: 3px;
  margin-bottom: 3px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #ececec;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const Placeinfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-top: 3px;
`;

export const Second = styled.div`
  display: flex; ;
`;

export const Image = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 7px;
  margin-right: 10px;
  background-color: white;
`;

export const Address = styled.div`
  font-size: 13px;
  color: #595959;
`;

export const Type = styled.div`
  font-size: 11px;
  color: gray;
`;

export const Context = styled.div`
  width: 60%;
  font-size: 14px;
  color: #595959;
`;

export const Third = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`;

export const Profile = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 30px;
`;
export const Name = styled.div`
  font-size: 12px;
  color: #595959;
`;
