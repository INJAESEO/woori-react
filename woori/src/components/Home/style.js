import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: 50vh;
  background-color: aliceblue;
`;

export const Header = styled.div`
  color: ${(props) => (props.isTrue ? "red" : "blue")};
`;
