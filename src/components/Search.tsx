import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();
  const [repo, setRepo] = useState("");

  return (
    <div>
      <input placeholder="Search Repository" onChange={(e) => setRepo(e.target.value)} />
      <input
        type="button"
        value={"search"}
        onClick={() => navigate({ pathname: "/search", search: `?repo=${repo}` })}
      />
    </div>
  );
}
