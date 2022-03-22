import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import RepoCard from "./RepoCard";

export default function SavedRepos() {
  const [repos, setRepos] = useState<ApiItems[]>(JSON.parse(window.localStorage.getItem("repos") as string) || []);

  return (
    <aside style={{ width: "30%" }}>
      <ul>
        {repos?.map((item) => (
          <RepoCard item={item} type={"saved"} />
        ))}
      </ul>
    </aside>
  );
}
