import React, { useState } from "react";
import "./weather.css";
import axios from "axios";

export default function Weather() {
  
  const [weatherData, setweatherData] = useState({ready:false});
  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
       ready:true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      date:"Sunday 09:00",
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      city: response.data.name,
    });

   
  }

  if (weatherData.ready) {
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
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt -3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />

              <strong className="temperature">
                {Math.round(weatherData.temperature)}
              </strong>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Pressure :{weatherData.pressure}%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind :{weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "938614f3c740dad73641e1620d175792";
    let city = "Guelph";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading....";
  }
}
