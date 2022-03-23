import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <Container>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
}

const Container = styled.div({
  backgroundColor: "#FFB6C1",
  minHeight: "100vh",
});
