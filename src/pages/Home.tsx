import React from "react";
import Search from "../components/Search";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
