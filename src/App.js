import React, { useState, useEffect } from "react";
import HamburgerMenu from "react-hamburger-menu";
import "./index.css";

function App() {
  const [isPaneOpen, setPaneOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const handleClick = () => {
    setPaneOpen(!isPaneOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      setPaneOpen(true);
    } else {
      setPaneOpen(false);
    }

    setPrevScrollPos(currentScrollPos);
  };

  return (
    <div className="App">
      <header className={`App-header ${isPaneOpen ? "hidden" : ""}`}>
        <HamburgerMenu
          isOpen={isPaneOpen}
          menuClicked={handleClick}
          width={35}
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
              width={35}
              height={35}
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
              <li>
                <a className="nav" href="index.html">
                  About
                </a>
              </li>
              <li>
                <div>
                  <a className="nav" href="#stuff">
                    Stuff
                  </a>
                </div>
              </li>
              <li>
                <a className="nav" href="#work">
                  Work
                </a>
              </li>
              <li>
                <a className="nav" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="nav"
                  target=" _blank"
                  id="resume"
                  href="resume.pdf"
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
