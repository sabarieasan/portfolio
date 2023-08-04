import React from "react";
import { Element } from "react-scroll";
import Experience from "../ExperienceBox/Experience";
import "./ExperienceContainer.css";

const ExperienceContainer = () => {
  return (
    <Element className="experienceContainer" id="exp">
      <h1>Experience</h1>
      <div className="experience-info">
        <Experience number="30+" title="Projects" />
        <Experience
          number="7+"
          title="Months"
          style={{ backgroundColor: "royalblue" }}
        />
        <Experience number="5+" title="React" />
      </div>
    </Element>
  );
};

export default ExperienceContainer;
