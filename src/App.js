import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="App text-center mt-5">How's the weather today?</h1>
      <Weather />
    </div>
  );
}

export default App;
