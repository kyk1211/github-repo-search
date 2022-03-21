import axios from "axios";
import React, { useState } from "react";

export default function Search() {
  const [data, setData] = useState<any[]>([]);

  const fetchRepos = async (user: string): Promise<void> => {
    const info = await axios.get(`https://api.github.com/users/${user}/repos`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });
    setData(info.data);
  };

  const fetchIssues = async (user: string, repo: string, num: number): Promise<void> => {
    const info = await axios.get(`https://api.github.com/repos/${user}/${repo}/issues${num}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });
    setData(info.data);
  };

  const fetchUserRepo = async (): Promise<void> => {
    const info = await axios.get("https://api.github.com/users/kyk1211/repos");
    setData(info.data);
  };

  const fetchReposWithQuery = async (repo: string, page: number): Promise<void> => {
    const info = await axios.get(
      `https://api.github.com/search/repositories?q=${repo}+in:name&page=${page}&per_page=10`,
      {
        headers: { Accept: "application/vnd.github.v3+json" },
      }
    );
    setData(info.data);
  };

  return (
    <>
      <input placeholder="Search Repository" />
      <input type="button" value={"search"} />
    </>
  );
}
