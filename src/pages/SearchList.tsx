import styled from "@emotion/styled";
import qs, { ParsedQs } from "qs";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchReposWithQuery } from "../lib/callApi";
import Pagination from "../components/Pagination";
import RepoCard from "../components/RepoCard";
import Search from "../components/Search";
import useLocalStorage from "../hooks/useLocalStorage";

export default function SearchList() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<RepoItems[]>([]);
  const [dataCount, setDataCount] = useState(0);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState<ParsedQs>({});
  const [repos, setRepos] = useLocalStorage<RepoItems[]>("repos");
  const location = useLocation();

  const getData = async (repo: string, num: number) => {
    setIsLoading(true);
    const result = await fetchReposWithQuery<RepoResult>(repo, num);
    console.log("repo", result);
    setData(result.items);
    setDataCount(result.total_count >= 1000 ? 1000 : result.total_count);
    setIsLoading(false);
  };

  const handleSave = (item: RepoItems) => {
    if (repos !== null && repos.length < 4) {
      if (repos.filter((value) => value.id !== item.id).length !== repos.length) {
        alert("이미 저장되었습니다.");
      } else {
        const data = [...repos];
        data.push(item);
        setRepos(data);
        alert("저장 성공");
      }
    }
    if (repos !== null && repos.length >= 4) {
      alert("저장은 최대 4개까지 입니다.");
    }
    if (repos === null) {
      const myRepo = [item];
      setRepos(myRepo);
    }
  };

  useEffect(() => {
    setData([]);
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
      <Search />
      {isLoading && <p>Loading</p>}
      <Wrapper>
        {data?.map((el) => (
          <RepoCard key={el.id} item={el} handleClick={handleSave} />
        ))}
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
