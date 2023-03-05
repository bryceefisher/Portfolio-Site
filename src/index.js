import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./App.css";

ReactDOM.render(<App />, document.getElementById("root"));

(function dynamicFooterYear() {
  const date = new Date();
  const year = date.getFullYear();
  const footer = document.getElementById("footer");
  footer.innerHTML = `© ${year} - Bryce Fisher`;
})();

(function smoothScrollHome() {
  const homeSection = document.querySelector("#name");

  document
    .querySelector(".navHome")
    .addEventListener("click", function (event) {
      event.preventDefault(); // prevents the default behavior of the link
      homeSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
})();

(function smoothScrollStuff() {
  const stuffSection = document.querySelector("#stuff");

  document
    .querySelector("#navStuff")
    .addEventListener("click", function (event) {
      event.preventDefault(); // prevents the default behavior of the link
      stuffSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
})();

(function smoothScrollWork() {
  const workSection = document.querySelector("#work");

  document
    .querySelector("#navWork")
    .addEventListener("click", function (event) {
      event.preventDefault(); // prevents the default behavior of the link
      workSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
})();

(function smoothScrollContact() {
  const contactSection = document.querySelector("#contact");

  document
    .querySelector("#navContact")
    .addEventListener("click", function (event) {
      event.preventDefault(); // prevents the default behavior of the link
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
})();
