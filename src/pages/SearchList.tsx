import styled from "@emotion/styled";
import qs, { ParsedQs } from "qs";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchReposWithQuery } from "../lib/callApi";
import Pagination from "../components/Pagination";
import RepoCard from "../components/RepoCard";
import Search from "../components/Search";

export default function SearchList() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ApiItems[]>([]);
  const [dataCount, setDataCount] = useState(0);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState<ParsedQs>({});
  const location = useLocation();

  const getData = async (repo: string, num: number) => {
    setIsLoading(true);
    const result = await fetchReposWithQuery<ApiResult>(repo, num);
    console.log(result);
    setData(result.items);
    setDataCount(result.total_count >= 1000 ? 1000 : result.total_count);
    setIsLoading(false);
  };

  useEffect(() => {
    setData([]);
    setDataCount(0);
    setPage(1);
  }, [location]);

  useEffect(() => {
    setQuery(
      qs.parse(location.search, {
        ignoreQueryPrefix: true,
      })
    );
  }, [location.search]);

  useEffect(() => {
    if (query.repo) {
      getData(query.repo as string, page);
    }
  }, [page, query.repo]);

  return (
    <Container>
      <Search />
      {isLoading && <p>Loading</p>}
      <Wrapper>
        {data?.map((el) => (
          <RepoCard key={el.id} item={el} />
        ))}
      </Wrapper>
      <Pagination dataCount={dataCount} currentPage={page} onPageChange={setPage} />
    </Container>
  );
}

const Container = styled.div({});

const Wrapper = styled.div({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "10px",
});
