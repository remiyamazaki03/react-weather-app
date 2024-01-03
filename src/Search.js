import React from "react";
import Current from "./Current";

export default function Search() {
  return (
    <div className="container">
      <form className="Search" id="enterCity">
        <div class="row">
          <div class="col-md-7">
            <input
              type="text"
              class="form-control"
              id="city"
              placeholder="Enter a city"
            />
          </div>
          <div class="col-md-2">
            <button type="submit" class="btn btn-primary my-3 my-md-0">
              Search
            </button>
          </div>
          <div class="col-md-3">
            <button class="btn btn-primary">Current</button>
          </div>
        </div>
      </form>
      <Current />
    </div>
  );
}
