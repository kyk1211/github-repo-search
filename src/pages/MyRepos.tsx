import styled from "@emotion/styled";
import React from "react";
import Issues from "../components/Issues";
import SavedRepos from "../components/SavedRepos";

export default function MyRepos() {
  return (
    <Container>
      <SavedRepos />
      <Issues />
    </Container>
  );
}

const Container = styled.div({
  display: "flex",
});
