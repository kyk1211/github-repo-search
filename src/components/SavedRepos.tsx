import styled from "@emotion/styled";
import React from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import RepoCard from "./RepoCard";

export default function SavedRepos() {
  const navigate = useNavigate();
  const [repos, setRepos] = useLocalStorage<RepoItems[]>("repos");

  const handleDelete = (item: RepoItems) => {
    setRepos((prev) => prev.filter((value) => value.id !== item.id));
    navigate("/issue");
  };

  return (
    <Container>
      <Wrapper>
        <Title>저장 목록</Title>
        <List>
          {repos.map((item) => (
            <li key={item.id} onClick={() => navigate({ pathname: "/issue", search: `?repo=${item.full_name}` })}>
              <RepoCard item={item} type={"saved"} handleClick={handleDelete} />
            </li>
          ))}
        </List>
      </Wrapper>
    </Container>
  );
}

const Container = styled.aside({
  width: "500px",
  minHeight: "calc(100vh - 50px)",
  padding: "10px",
  borderRight: "1px solid black",
});

const Wrapper = styled.div({
  position: "sticky",
  top: "0",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const Title = styled.h1({
  textAlign: "center",
});

const List = styled.ul({
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});
