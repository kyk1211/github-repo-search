import styled from "@emotion/styled";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();
  const [repo, setRepo] = useState("");

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e);
    if (e.key === "Enter") {
      e.preventDefault();
      navigate({ pathname: "/search", search: `?repo=${repo}` });
      setRepo("");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Input
          placeholder="Search Repository"
          onChange={(e) => {
            setRepo(e.target.value);
          }}
          onKeyUp={handleKeyUp}
          value={repo}
        />
        <Btn
          onClick={() => {
            navigate({ pathname: "/search", search: `?repo=${repo}` });
            setRepo("");
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
          </svg>
        </Btn>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div({
  display: "flex",
  justifyContent: "center",
  margin: "10px 0",
});

const Wrapper = styled.div({
  backgroundColor: "#fff",
  display: "flex",
  width: "450px",
  border: "1px solid black",
  borderRadius: "20px",
  padding: "5px 10px 5px 15px",
});

const Input = styled.input({
  outline: "none",
  border: "none",
  flex: "1",
  fontSize: "18px",
});

const Btn = styled.button({
  background: "none",
  border: "none",
  cursor: "pointer",
  height: "100%",
  "& svg": {
    width: "20px",
  },
});
