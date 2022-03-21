import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchList from "./components/SearchList";
import Home from "./pages/Home";
import MyRepos from "./pages/MyRepos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="repos" element={<MyRepos />} />
          <Route path="search" element={<SearchList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
