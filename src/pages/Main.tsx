import styled from "@emotion/styled";
import React from "react";
import Search from "../components/Search";

export default function Main() {
  return (
    <Container>
      <h1>Github Repository Search</h1>
      <Search />
    </Container>
  );
}

const Container = styled.div({
  width: "100%",
  height: "calc(100vh - 50px)",
  padding: "50px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "100px",
  fontSize: "30px",
});
