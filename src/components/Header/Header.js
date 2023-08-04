import React from "react";
import { Link } from "react-scroll";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h1>
          Frontend <span>Developer</span>
        </h1>
      </div>

      <div className="header-right">
        <Link to="about" smooth={true} duration="500">
          <h1>About</h1>
        </Link>
        <Link to="skills" smooth={true} duration="500">
          <h1>Skills</h1>
        </Link>
        <Link to="projects" smooth={true} duration="500">
          <h1>Projects</h1>
        </Link>
        <Link to="exp" smooth={true} duration="500">
          <h1>Experience</h1>
        </Link>
        <Link to="contact" smooth={true} duration="500">
          <h1>Contact</h1>
        </Link>
        <h4 className="header-rightbtn">Join with me</h4>
      </div>
    </div>
  );
};

export default Header;
