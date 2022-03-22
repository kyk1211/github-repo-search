import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}