import styled, { css } from "styled-components";

export const Title = styled.h1`
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
`;

export const Paragraph = styled.p`
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 14px;
`;

export const Container = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

export const Text = styled.span`
  text-decoration-line: none;
  color: #a35414;
  font-weight: bold;
  font-size: 14px;
`;
