import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <footer>
      This project was coded by {""}
      <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
        charity and is
      </a>
      {""}
      and is {""}
      <a
        href="https://github.com/mike-charity/reactweather.git"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced on Github
      </a>
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
