import React from "react";
import Link from "next/link";

const NavBar = () => {
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
      </nav>
    </>
  );
};

export default NavBar;
