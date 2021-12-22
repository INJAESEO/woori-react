import styled from "styled-components";

export const Title = styled.h3`
  margin-top: 0px;
  padding-top: 40px;
  font-size: 16px;
  text-align: center;
`;

export const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const Label = styled.label`
  font-size: 12px;
  color: #a35414;
  font-weight: bold;
`;

export const Button = styled.button`
  background-color: #f5f5dc;
  color: #a35414;
  font-weight: bold;
  width: 150px;
  border-style: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 50px;
`;

export const Input = styled.input`
  margin: 0 auto;
  margin-top: 4px;
  height: 20px;
  width: 100%;
  border-style: none;
  border-bottom: solid 3px #f5f5dc;
`;

export const IdCode = styled.p`
  margin-top: 4px;
  font-size: 16px;
  font-weight: bold;
  border-bottom: solid 3px #f5f5dc;
  @media (max-width: 270px) {
    font-size: 12px;
  }
`;
