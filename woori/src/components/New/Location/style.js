import styled from "styled-components";

export const Container = styled.div`
  padding: 12px;
  background-color: rgba(255, 255, 255, 0.7);
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PlusButton = styled.div`
  background-color: #ffff;
  border: 3px solid #f5f4f5;
  border-radius: 6px;
  width: 100%;
  padding: 10px;
  text-align: center;
  cursor: pointer;
`;

export const Input = styled.input`
  background-color: #ffff;
  border: none;
  border-radius: 6px;
  width: 100%;
  padding: 10px;
  font-size: 12px;
  color: black;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const LocationInput = styled.div`
  background-color: #ffff;
  border: 3px solid #f5f4f5;
  border-radius: 6px;
  width: 100%;
  padding: 10px;
  text-align: center;
  cursor: pointer;
`;

export const Select = styled.select`
  background-color: #ffff;
  border: none;
  width: 100%;
  padding: 10px;
  font-size: 12px;
  border-bottom: 3px solid #f5f5dc;
`;
