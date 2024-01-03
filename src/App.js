import React from "react";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="App text-center mt-5">How's the weather today?</h1>
      <div className="card card-body">
        <Search />
      </div>
    </div>
  );
}

export default App;
