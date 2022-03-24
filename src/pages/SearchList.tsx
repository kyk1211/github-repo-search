import styled from "@emotion/styled";
import qs, { ParsedQs } from "qs";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchReposWithQuery } from "../lib/callApi";
import Pagination from "../components/Pagination";
import RepoCard from "../components/RepoCard";
import Search from "../components/Search";
import useLocalStorage from "../hooks/useLocalStorage";
import Loading from "../components/Loading";
import { useToast } from "../hooks/useToast";
import { useQuery } from "react-query";

export default function SearchList() {
  const [dataCount, setDataCount] = useState(0);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState<ParsedQs>({});
  const [repos, setRepos] = useLocalStorage<RepoItems[]>("repos", []);
  const toast = useToast();
  const location = useLocation();

  const { data: RepoData, isFetching } = useQuery<RepoResult>(
    ["repos", { name: query.repo as string, page: page }],
    async () => fetchReposWithQuery<RepoResult>(query.repo as string, page),
    { keepPreviousData: true, refetchOnWindowFocus: true, staleTime: 60000, enabled: !!query.repo }
  );

  const handleSave = (item: RepoItems) => {
    if (repos !== null && repos.length < 4) {
      if (repos.filter((value) => value.id !== item.id).length !== repos.length) {
        toast("이미 저장되었습니다.", false);
      } else {
        const myRepos = [...repos];
        myRepos.push(item);
        setRepos(myRepos);
        toast("저장 성공", true);
      }
    }
    if (repos !== null && repos.length >= 4) {
      toast("저장은 최대 4개까지 입니다.", false);
    }
    if (repos === null) {
      const myRepo = [item];
      setRepos(myRepo);
      toast("저장 성공", true);
    }
  };

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
    if (RepoData) {
      setDataCount(RepoData.total_count >= 1000 ? 1000 : RepoData.total_count);
    }
  }, [RepoData]);

  return (
    <Container>
      <Search />
      <Wrapper>
        {isFetching && (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        )}
        {query.repo &&
          !isFetching &&
          RepoData?.items.map((item) => <RepoCard key={item.id} item={item} handleClick={handleSave} />)}
      </Wrapper>
      <Pagination dataCount={dataCount} currentPage={page} onPageChange={setPage} />
    </Container>
  );
}

const Container = styled.div({
  padding: "0 10px",
});

const Wrapper = styled.ul({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "10px",
});

const LoadingContainer = styled.div({
  padding: "50px",
});
