import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
`;

export const Map = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 10px;
`;

export const ResultList = styled.div`
  width: 100%;
  height: 300px;
  overflow: scroll;
  #pagination > a {
    margin: 6px;
  }
`;

export const Result = styled.div`
  border-top: 1px solid #e3e3e3;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #e6e6e6;
  }
  h5 {
    margin: 0;
    font-size: 16px;
  }
  p {
    font-size: 14px;
    margin: 0;
    margin-top: 4px;
  }
`;
