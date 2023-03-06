import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import "./index.css";

function App() {
  const [isPaneOpen, setPaneOpen] = useState(false);

  const handleClick = () => {
    setPaneOpen(!isPaneOpen);
  };

  const handleLinkClick = () => {
    setPaneOpen(false);
  };

  return (
    <div className="App">
      <header className={`App-header ${isPaneOpen ? "hidden" : ""}`}>
        <HamburgerMenu
          isOpen={isPaneOpen}
          menuClicked={handleClick}
          width={50}
          height={35}
          strokeWidth={1}
          rotate={0}
          color="white"
          borderRadius={0}
          animationDuration={0.5}
        />
      </header>

      {isPaneOpen && (
        <div className="pane">
          <div className="close-menu">
            <HamburgerMenu
              isOpen={isPaneOpen}
              menuClicked={handleClick}
              width={50}
              height={50}
              strokeWidth={1}
              rotate={0}
              color="white"
              borderRadius={0}
              animationDuration={0.5}
              isCross
            />
          </div>
          <div className="pane-content">
            <ol id="navlistPane" type="1">
              <li id="aboutli" onClick={handleLinkClick}>
                <a
                  onClick={handleLinkClick}
                  className="nav"
                  id="navAboutMePane"
                  href="#aboutMe"
                >
                  About
                </a>
              </li>
              <li id="stuffli" onClick={handleLinkClick}>
                <a
                  onClick={handleLinkClick}
                  className="nav"
                  id="navStuffPane"
                  href="#stuff"
                >
                  Stuff
                </a>
              </li>
              <li id="workli" onClick={handleLinkClick}>
                <a
                  onClick={handleLinkClick}
                  className="nav"
                  id="navWorkPane"
                  href="#work"
                >
                  Work
                </a>
              </li>
              <li id="contactli" onClick={handleLinkClick}>
                <a
                  onClick={handleLinkClick}
                  className="nav"
                  id="navContactPane"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
              <li onClick={handleLinkClick}>
                <a
                  onClick={handleLinkClick}
                  className="nav"
                  target=" _blank"
                  id="resume"
                  href="assets/resume.pdf"
                >
                  Resume
                </a>
              </li>
            </ol>
          </div>
          <div className="backdrop" onClick={handleClick}></div>
        </div>
      )}
    </div>
  );
}

export default App;
