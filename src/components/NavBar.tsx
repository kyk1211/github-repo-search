import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Nav>
      <span>Logo</span>
      <StyledLink to="search">Search</StyledLink>
      <StyledLink to="repos">My Repositories</StyledLink>
    </Nav>
  );
}

const Nav = styled.span({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100vw",
  height: "50px",
  padding: "0px 10px",
  gap: "20px",
  borderBottom: "1px solid black",
});

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "black",
  fontWeight: "bold",
});
