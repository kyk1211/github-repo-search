import axios from "axios";

const headers = {
  Accept: "application/vnd.github.v3+json",
  Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY as string}`,
};
const perPage = 10;

const fetchIssuesWithQuery = async <T>(repo: string, page: number): Promise<T> => {
  console.log(headers);
  const info = await axios.get(`https://api.github.com/search/issues?q=repo:${repo}&page=${page}&per_page=${perPage}`, {
    headers: headers,
  });
  return info.data;
};

const fetchReposWithQuery = async <T>(repo: string, page: number): Promise<T> => {
  const info = await axios.get(
    `https://api.github.com/search/repositories?q=${repo}+in:name&page=${page}&per_page=${perPage}`,
    {
      headers: headers,
    }
  );
  return info.data;
};

export { fetchIssuesWithQuery, fetchReposWithQuery };
