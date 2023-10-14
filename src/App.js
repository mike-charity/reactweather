import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Guelph" />
        <footer>
          This project was coded by{" "}
          <a href="https://www.shecodes.io/" target="_blank">
            charity and is
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/mike-charity/reactweather"
            target="_blank"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
