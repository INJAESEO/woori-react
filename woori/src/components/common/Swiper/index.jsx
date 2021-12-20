import Flicking from "@egjs/react-flicking";
import React from "react";
import styled from "styled-components";

const Swiper = ({
  margin,
  containerStyle,
  children,
  horizontal = true,
  ...props
}) => {
  return (
    <Container
      margin={margin}
      style={{ overflowX: "hidden", padding: "10px 0", ...containerStyle }}
      vertical={!horizontal}
    >
      <Flicking {...props}>{children}</Flicking>
    </Container>
  );
};

export default Swiper;

const Container = styled.div`
  > div > div {
    display: flex;
    ${({ vertical }) => vertical && "flex-direction: column"}
    > div {
      ${({ margin }) => margin && `margin: ${margin}`}
    }
  }
`;
