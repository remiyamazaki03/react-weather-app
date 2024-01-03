import React from "react";

export default function Current() {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-8 d-flex flex-column">
          <div className="ps-2 labels" id="timeDisplay">
            Oct 26 12:36
          </div>
          <h1 className="ms-1" id="cityDisplay">
            Enter a city
          </h1>
        </div>
        <div className="col-4 d-flex flex-column">
          <div className="labels" id="windSpeed"></div>
          <div className="labels d-none d-md-block" id="weatherDisplay"></div>
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
            alt="weather icon"
            className="icon img-fluid"
            id="iconToday"
          />
        </div>
      </div>
    </div>
  );
}
