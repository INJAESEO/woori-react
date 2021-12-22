import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 12px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
`;

export const Button = styled.button`
  background-color: #f5f5dc;
  color: #a35414;
  font-weight: bold;
  width: 196px;
  border-style: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
`;
