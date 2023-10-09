import React from "react";
import "./weather.css";
import axios from "axios";
export default function Weather() {
  const apiKey = "938614f3c740dad73641e1620d175792";
  let city="Guelph";
  let apiUrl = `https://api.openweathermap.org/data/3.0/weather?q=${city}&appid=${apiKey}`;
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn -primary  w-100 "
            />
          </div>
        </div>
      </form>
      <h1>Guelph</h1>
      <ul>
        <li>Sunday 9:00</li>
        <li>Dispersed Rain</li>
      </ul>
      <div className="row mt -3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="Mostly Cloudy"
              className="float-left"
            />

            <strong className="temperature">9</strong>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation :10%</li>
            <li>Humidity: 45%</li>
            <li>Wind :12km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
