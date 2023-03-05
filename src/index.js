import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./App.css";

ReactDOM.render(<App />, document.getElementById("root"));

// add a dynamic date to #footer inner html
const date = new Date();
const year = date.getFullYear();
const footer = document.getElementById("footer");
footer.innerHTML = `© ${year} - Bryce Fisher`;
