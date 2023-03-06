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

(function smoothScrollAboutMe() {
  const aboutSection = document.querySelector("#aboutMe");

  document
    .querySelector("#navAbout")
    .addEventListener("click", function (event) {
      event.preventDefault(); // prevents the default behavior of the link
      event.stopPropagation();
      aboutSection.scrollIntoView({
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
      event.stopPropagation();
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
      event.stopPropagation();
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
      event.stopPropagation();
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
})();

window.addEventListener("click", function () {
  const pane = document.querySelector(".pane");
  if (pane) {
    (function smoothScrollAboutMePane() {
      const aboutSection = document.querySelector("#aboutMe");

      document
        .querySelector("#aboutli")
        .addEventListener("click", function (event) {
          event.preventDefault(); // prevents the default behavior of the link
          aboutSection.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
          pane.style.display = "none"; // hide the pane after scrolling
        });

      // add event listener for closing the pane when clicking on link within the pane
      document.querySelector("#aboutli").addEventListener("click", function () {
        pane.style.display = "none";
      });
    })();

    // same for the other sections
    (function smoothScrollStuffPane() {
      const stuffSection = document.querySelector("#stuff");

      document
        .querySelector("#stuffli")
        .addEventListener("click", function (event) {
          event.preventDefault(); // prevents the default behavior of the link
          stuffSection.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
          pane.style.display = "none"; // hide the pane after scrolling
        });

      // add event listener for closing the pane when clicking on link within the pane
      document.querySelector("#stuffli").addEventListener("click", function () {
        pane.style.display = "none";
      });
    })();

    (function smoothScrollWorkPane() {
      const workSection = document.querySelector("#work");

      document
        .querySelector("#workli")
        .addEventListener("click", function (event) {
          event.preventDefault(); // prevents the default behavior of the link
          workSection.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
          pane.style.display = "none"; // hide the pane after scrolling
        });

      // add event listener for closing the pane when clicking on link within the pane
      document.querySelector("#workli").addEventListener("click", function () {
        pane.style.display = "none";
      });
    })();

    (function smoothScrollContactPane() {
      const contactSection = document.querySelector("#contact");

      document
        .querySelector("#contactli")
        .addEventListener("click", function (event) {
          event.preventDefault(); // prevents the default behavior of the link
          contactSection.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
          pane.style.display = "none"; // hide the pane after scrolling
        });

      // add event listener for closing the pane when clicking on link within the pane
      document
        .querySelector("#contactli")
        .addEventListener("click", function () {
          pane.style.display = "none";
        });
    })();
  }
});
