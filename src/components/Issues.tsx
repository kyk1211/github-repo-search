import styled from "@emotion/styled";
import qs from "qs";
import { ParsedQs } from "qs";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { fetchIssuesWithQuery } from "../lib/callApi";
import IssueCard from "./IssueCard";
import Loading from "./Loading";
import Pagination from "./Pagination";

export default function Issues() {
  const [dataCount, setDataCount] = useState(0);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState<ParsedQs>({});
  const location = useLocation();

  const { data: IssueData, isFetching } = useQuery<IssueResult>(
    ["issues", { name: query.repo as string, page: page }],
    async () => fetchIssuesWithQuery<IssueResult>(query.repo as string, page),
    { keepPreviousData: true, refetchOnWindowFocus: true, staleTime: 60000, enabled: !!query.repo }
  );

  useEffect(() => {
    setDataCount(0);
    setPage(1);
    setQuery(
      qs.parse(location.search, {
        ignoreQueryPrefix: true,
      })
    );
  }, [location.search]);

  useEffect(() => {
    if (IssueData) {
      setDataCount(IssueData.total_count >= 1000 ? 1000 : IssueData.total_count);
    }
  }, [IssueData]);

  return (
    <Container>
      <Title>Issues</Title>
      {IssueData?.items.length === 0 && !isFetching && <p>이슈가 없습니다.</p>}
      {isFetching && <Loading />}
      <Wrapper>
        {query.repo &&
          !isFetching &&
          IssueData?.items.map((item) => <IssueCard key={item.id} item={item} name={query.repo as string} />)}
      </Wrapper>
      <Pagination dataCount={dataCount} currentPage={page} onPageChange={setPage} />
    </Container>
  );
}

const Container = styled.section({
  padding: "10px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Title = styled.h1({
  textAlign: "center",
});

const Wrapper = styled.ul({
  width: "100%",
  padding: "10px 20px",
  listStyle: "none",
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  justifyContent: "center",
  alignItems: "flex-start",
  flexDirection: "column",
});
