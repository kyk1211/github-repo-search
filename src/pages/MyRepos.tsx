import React from "react";
import Issues from "../components/Issues";
import SavedRepos from "../components/SavedRepos";

export default function MyRepos() {
  return (
    <div>
      <SavedRepos />
      <Issues />
    </div>
  );
}
