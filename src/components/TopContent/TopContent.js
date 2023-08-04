import React from "react";
import { Link } from "react-scroll";
import "./TopContent.css";

const TopContent = () => {
  return (
    <div className="topContent">
      <div className="topContent-container">
        <h1>Sabari Easan</h1>
        <p>A Full Stack Web Developer</p>
        <a href="www.google.com">
          <button className="downloadBtn">Download CV</button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
          <button className="workBtn">My work</button>
        </Link>
      </div>
    </div>
  );
};

export default TopContent;
