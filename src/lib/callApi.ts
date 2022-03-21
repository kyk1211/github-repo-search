import axios from "axios";

const fetchRepos = async (user: string): Promise<void> => {
  const info = await axios.get(`https://api.github.com/users/${user}/repos`, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  });
  return info.data;
};

const fetchIssues = async (user: string, repo: string, num: number): Promise<void> => {
  const info = await axios.get(`https://api.github.com/repos/${user}/${repo}/issues${num}`, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  });
  return info.data;
};

const fetchUserRepo = async (): Promise<void> => {
  const info = await axios.get("https://api.github.com/users/kyk1211/repos");
  return info.data;
};

const fetchReposWithQuery = async (repo: string, page: number): Promise<void> => {
  const info = await axios.get(
    `https://api.github.com/search/repositories?q=${repo}+in:name&page=${page}&per_page=10`,
    {
      headers: { Accept: "application/vnd.github.v3+json" },
    }
  );
  return info.data;
};

export { fetchIssues, fetchRepos, fetchReposWithQuery, fetchUserRepo };
