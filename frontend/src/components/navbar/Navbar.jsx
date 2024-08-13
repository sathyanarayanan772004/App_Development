import React, { useState, useEffect } from "react";
import "./navbar.css";
import LOGO from "../../assets/logos/strike.svg";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

const Navbar = ({ toggle }) => {
  const [navbar, setNavbarColor] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav className={navbar ? "navbar-active-color" : "navbar"}>
      <HiMenu className="menu-bars" onClick={toggle} />
      <Link to="/Workouts">
        <a href="/" className="menu-items">Virtual Training</a>
      </Link>
      <Link to="/pricing">
        <a href="/" className="menu-items">Diet Plans</a>
      </Link>
      <Link to="/home">
        <a href="/" className="menu-items">Home</a>
      </Link>
      
      <Link to="/contact">
        <a href="/" className="menu-items">Progress</a>
      </Link>
      
      <Link to="/profile">
        <a href="/" className="menu-items">My Profile</a>
      </Link>
      <Link to="/">
        <a href="/" className="menu-items">Login</a>
      </Link>
    </nav>
  );
};

export default Navbar;
