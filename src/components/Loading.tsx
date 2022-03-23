import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

export default function Loading() {
  return (
    <Container>
      <Circle />
    </Container>
  );
}

const spin = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;

const Container = styled.div({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Circle = styled.div({
  margin: "auto",
  width: "400px",
  height: "400px",
  borderRadius: "9999px",
  border: "20px solid #fff",
  borderBottom: "20px solid skyblue",
  animation: `${spin} 0.7s linear infinite`,
});
