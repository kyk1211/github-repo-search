import qs from "qs";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchReposWithQuery } from "../lib/callApi";
import Pagination from "./Pagination";
import Search from "./Search";

interface ApiResult {
  incomplete_results: boolean;
  items: any[];
  total_count: number;
}

export default function SearchList() {
  const [data, setData] = useState<any[]>([]);
  const [dataCount, setDataCount] = useState(0);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const getData = async (repo: string, num: number) => {
    const result = await fetchReposWithQuery<ApiResult>(repo, num);
    console.log(result);
    setData(result.items);
    setDataCount(result.total_count);
  };

  useEffect(() => {
    getData(query.repo as string, page);
  }, [location.search, page, query.repo]);

  return (
    <div>
      <Search />
      <ul>
        {data?.map((el) => (
          <li key={el.id}>{el.full_name}</li>
        ))}
      </ul>
      <Pagination dataCount={dataCount} currentPage={page} onPageChange={setPage} />
    </div>
  );
}
