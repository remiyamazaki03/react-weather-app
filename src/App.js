import React from "react";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <h1 className="text-center mt-5">How's the weather today?</h1>
      <div className="App card card-body">
        <Search />
      </div>
    </div>
  );
}
