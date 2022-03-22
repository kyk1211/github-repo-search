import styled from "@emotion/styled";
import React from "react";

export default function Main() {
  return <Container>Payhere 기업과제</Container>;
}

const Container = styled.div({
  width: "100%",
  height: "calc(100vh - 50px)",
  paddingBottom: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: "52px",
});
