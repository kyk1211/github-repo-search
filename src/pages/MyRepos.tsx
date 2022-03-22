import React from "react";

export default function MyRepos() {
  const repos: ApiItems[] | null = JSON.parse(window.localStorage.getItem("repos") as string);
  return (
    <div>
      {repos?.map((item) => (
        <p key={item.id}>{item.full_name}</p>
      ))}
    </div>
  );
}
