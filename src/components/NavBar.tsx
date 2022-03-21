import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <span>Logo</span>
      <Link to="search">Search</Link>
      <Link to="repos">My Repositories</Link>
    </nav>
  );
}
