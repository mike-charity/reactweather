import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>

        <Weather />
        <footer>
          This project was coded by
          <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
            charity and is
          </a>
          <p>
            <a
              href="https://github.com/mike-charity/reactweather"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
