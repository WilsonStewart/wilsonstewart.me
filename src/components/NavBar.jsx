import React, { useState, useEffect } from "react";
import Link from "next/link";

import { FaBars, FaAngleDown } from "react-icons/fa";

const NavBar = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMobileViewActive, setIsMobileViewActive] = useState(true);

  const setMobileMode = () => {
    if (window.innerWidth <= 700) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  };

  useEffect(() => {
    setMobileMode();
    window.addEventListener("resize", setMobileMode);
  }, []);

  return (
    <>
      <nav className="nav-container">
        <div className="nav-text-logo">
          <a className="navbar">wilsonstewart.me</a>
        </div>
        <div>
          <ul className="nav-list">
            <li className="nav-list">
              <Link href="/projects">
                <a className="navbar">Projects</a>
              </Link>
            </li>
            <li className="nav-list">
              <Link href="/about-me">
                <a className="navbar">About Me</a>
              </Link>
            </li>
            <li className="nav-list">
              <Link href="/contact">
                <a className="navbar">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        {isMobileView ? (
          <div>
            {isMobileViewActive ? (
              <FaBars
                className="nav-hamburger"
                onClick={() => setIsMobileViewActive(false)}
              />
            ) : (
              <FaAngleDown
                className="nav-hamburger"
                onClick={() => setIsMobileViewActive(true)}
              />
            )}
          </div>
        ) : null}
      </nav>
    </>
  );
};

export default NavBar;
