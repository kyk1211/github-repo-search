import styled from "@emotion/styled";
import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import RepoCard from "./RepoCard";

export default function SavedRepos() {
  const [repos, setRepos] = useLocalStorage<ApiItems[]>("repos");

  const handleDelete = (item: ApiItems) => {
    setRepos((prev) => prev.filter((value) => value.id !== item.id));
    alert("삭제 성공");
  };

  return (
    <aside style={{ width: "30%" }}>
      <ul>
        {repos?.map((item) => (
          <RepoCard item={item} type={"saved"} handleClick={handleDelete} />
        ))}
      </ul>
    </aside>
  );
}
