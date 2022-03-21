import React from "react";
import Search from "../components/Search";
import SearchList from "../components/SearchList";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <div>
      <SideBar />
      <Search />
      <SearchList />
    </div>
  );
}
