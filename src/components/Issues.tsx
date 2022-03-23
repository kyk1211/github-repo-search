import styled from "@emotion/styled";
import qs from "qs";
import { ParsedQs } from "qs";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchIssuesWithQuery } from "../lib/callApi";
import IssueCard from "./IssueCard";
import Pagination from "./Pagination";

export default function Issues() {
  const [isLoading, setIsLoading] = useState(false);
  const [issues, setIssues] = useState<IssueItems[]>([]);
  const location = useLocation();
  const [dataCount, setDataCount] = useState(0);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState<ParsedQs>({});

  const getData = async (repo: string, num: number) => {
    setIsLoading(true);
    const result = await fetchIssuesWithQuery<IssueResult>(repo, num);
    console.log("issue", result);
    setIssues(result.items);
    setDataCount(result.total_count >= 1000 ? 1000 : result.total_count);
    setIsLoading(false);
  };

  useEffect(() => {
    setIssues([]);
    setDataCount(0);
    setPage(1);
  }, [location.search]);

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
      <Title>Issues</Title>
      {isLoading && <p>loading</p>}
      {issues.length === 0 && !isLoading && <p>이슈가 없습니다.</p>}
      <Wrapper>
        {issues.map((value) => (
          <IssueCard key={value.id} item={value} name={query.repo as string} />
        ))}
      </Wrapper>
      <Pagination dataCount={dataCount} currentPage={page} onPageChange={setPage} />
    </Container>
  );
}

const Container = styled.section({
  padding: "10px",
  width: "100%",
});

const Title = styled.h1({
  textAlign: "center",
});

const Wrapper = styled.ul({
  padding: "10px 20px",
  listStyle: "none",
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  justifyContent: "center",
  alignItems: "flex-start",
  flexDirection: "column",
});
