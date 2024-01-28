import React from "react";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import "./Navbar.scss";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="navbar__logo" src={logo} alt="BrainFlix logo" />
      <SearchBar />
    </nav>
  );
};

export default Navbar;
