import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    setTemperature(Math.round(response.data.temperature.current));
    setReady(true);
  }

  if (ready) {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-8 d-flex flex-column">
            <div className="labels" id="timeDisplay">
              Oct 26 12:36
            </div>
            <h1 id="cityDisplay">Enter a city</h1>
          </div>
          <div className="col-4 d-flex flex-column">
            <div className="labels" id="windSpeed">
              Wind
            </div>
            <div className="labels d-none d-md-block" id="weatherDisplay">
              Sunny
            </div>
            <img
              src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              alt="weather icon"
              className="icon img-fluid"
              id="iconToday"
            />
          </div>
        </div>
        <div class="row">
          <h5>
            <span id="average">{temperature}</span>
            <a href="#" id="toCelsius">
              °C
            </a>
            |
            <a href="#" id="toFahrenheit">
              °F
            </a>
            (
            <span class="high" id="highToday">
              high°C
            </span>
            |
            <span class="low" id="lowToday">
              low°C
            </span>
            )
          </h5>
        </div>
        <Forecast />
      </div>
    );
  } else {
    const apiKey = "8a32636a9f2a4b34c0df70a3a3to1b99";
    let city = "Tokyo";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
