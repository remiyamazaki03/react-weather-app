import React from "react";
import Weather from "./Weather";

export default function Search() {
  return (
    <div className="container">
      <form className="Search" id="enterCity">
        <div className="row">
          <div className="col-md-7">
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="Enter a city"
            />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-primary my-3 my-md-0">
              Search
            </button>
          </div>
          <div className="col-md-3">
            <button className="btn btn-primary">Current</button>
          </div>
        </div>
      </form>
      <Weather />
    </div>
  );
}
