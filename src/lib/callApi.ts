import axios from "axios";

const fetchRepos = async <T>(user: string): Promise<T> => {
  const info = await axios.get(`https://api.github.com/users/${user}/repos`, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  });
  return info.data;
};

const fetchIssues = async <T>(user: string, repo: string, num: number): Promise<T> => {
  const info = await axios.get(`https://api.github.com/repos/${user}/${repo}/issues${num}`, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  });
  return info.data;
};

const fetchUserRepo = async <T>(): Promise<T> => {
  const info = await axios.get("https://api.github.com/users/kyk1211/repos");
  return info.data;
};

const fetchReposWithQuery = async <T>(repo: string, page: number): Promise<T> => {
  const info = await axios.get(
    `https://api.github.com/search/repositories?q=${repo}+in:name&page=${page}&per_page=10`,
    {
      headers: { Accept: "application/vnd.github.v3+json" },
    }
  );
  return info.data;
};

export { fetchIssues, fetchRepos, fetchReposWithQuery, fetchUserRepo };
