import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchList from "./pages/SearchList";
import Home from "./pages/Home";
import MyRepos from "./pages/MyRepos";
import Main from "./pages/Main";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Main />} />
            <Route path="issue" element={<MyRepos />} />
            <Route path="search" element={<SearchList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
