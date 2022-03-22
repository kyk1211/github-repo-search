import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchList from "./pages/SearchList";
import Home from "./pages/Home";
import MyRepos from "./pages/MyRepos";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Main />} />
          <Route path="repos" element={<MyRepos />} />
          <Route path="search" element={<SearchList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
