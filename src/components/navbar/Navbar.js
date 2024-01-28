import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import "./Navbar.scss";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="navbar__logo" src={logo} alt="BrainFlix logo" />
      </Link>
      <SearchBar />
    </nav>
  );
};

export default Navbar;
