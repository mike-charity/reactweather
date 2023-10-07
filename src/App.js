import React from "react";
import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <footer>
        This project was coded by{" "}
        <a href="https://www.shecodes.io/" target="_blank">
          charity
        </a>
        {""}
        and is{" "}
        <a href="https://github.com/mike-charity/reactweather" target="_blank">
          open-sourced on Github{" "}
        </a>
      </footer>
    </div>
  );
}
