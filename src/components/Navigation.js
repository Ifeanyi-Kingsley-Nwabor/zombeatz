import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <img src={logo} className="App-logo" alt="Logo" />
        <ul id="nav-mobile" className="right ">
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
