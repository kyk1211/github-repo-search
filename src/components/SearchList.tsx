import qs from "qs";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchReposWithQuery } from "../lib/callApi";
import Pagination from "./Pagination";
import RepoCard from "./RepoCard";
import Search from "./Search";

export default function SearchList() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ApiItems[]>([]);
  const [dataCount, setDataCount] = useState(0);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const getData = async (repo: string, num: number) => {
    setIsLoading(true);
    const result = await fetchReposWithQuery<ApiResult>(repo, num);
    console.log(result);
    setData(result.items);
    setDataCount(result.total_count >= 1000 ? 1000 : result.total_count);
    setIsLoading(false);
  };

  useEffect(() => {
    if (query.repo) {
      getData(query.repo as string, page);
    }
  }, [location.search, page, query.repo]);

  return (
    <div>
      <Search />
      {isLoading && <p>Loading</p>}
      {isLoading || (
        <ul>
          {data?.map((el) => (
            <RepoCard key={el.id} item={el} />
          ))}
        </ul>
      )}
      <Pagination dataCount={dataCount} currentPage={page} onPageChange={setPage} />
    </div>
  );
}
