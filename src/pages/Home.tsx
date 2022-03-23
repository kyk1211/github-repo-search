import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import { ToastList } from "../components/ToastList";

export default function Home() {
  return (
    <Container>
      <header>
        <NavBar />
      </header>
      <Main>
        <ToastList />
        <Outlet />
      </Main>
    </Container>
  );
}

const Container = styled.div({
  backgroundColor: "#FFB6C1",
  width: "calc(100vw - (100vw - 100%))",
  minHeight: "100vh",
});

const Main = styled.main({
  width: "100%",
  height: "calc(100% - 50px)",
});
