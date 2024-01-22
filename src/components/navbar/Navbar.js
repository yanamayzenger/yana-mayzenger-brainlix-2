import React from "react";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/Icons/search.svg";
import uploadIcon from "../../assets/Icons/upload.svg";
import profileImage from "../../assets/Images/Mohan-muruge.jpg";
import "./Navbar.scss";

const SearchBar = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="search__input-wrapper">
        <img className="search__icon" src={searchIcon} alt="search icon" />
        <label className="search__label" htmlFor="search"></label>
        <input
          className="search__input"
          type="text"
          name="search"
          placeholder="Search"
        />
      </div>

      <button className="search__submit" type="submit">
        <img
          className="search__submit-icon"
          src={uploadIcon}
          alt="upload icon"
        />
        UPLOAD
      </button>

      <div className="search__avatar-wrapper">
        <img className="search__avatar" src={profileImage} alt="Mogan muruge" />
      </div>
    </form>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="navbar__logo" src={logo} alt="BrainFlix logo" />
      <SearchBar />
    </nav>
  );
};

export default Navbar;
