import React from "react";
import { Element } from "react-scroll";
import { LinearProgress } from "@mui/material";
import "./SkillContainer.css";
const SkillContainer = () => {
  return (
    <Element className="skillContainer" id="skills">
      <div className="skillContainer-img">
        <img
          src={
            "https://cdni.iconscout.com/illustration/premium/thumb/programming-skills-1946874-1649524.png"
          }
          alt=""
        />
      </div>
      <div className="skillContainer-text">
        <h2>SKILLSET</h2>

        <div className="skillset">
          <h5>HTML</h5>
          <div className="slider slider1">
            <LinearProgress variant="determinate" value={90} />
          </div>
        </div>

        <div className="skillset">
          <h5>CSS</h5>
          <div className="slider slider2">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>

        <div className="skillset">
          <h5>JavaScript</h5>
          <div className="slider slider3">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>

        <div className="skillset">
          <h5>React</h5>
          <div className="slider slider4">
            <LinearProgress variant="determinate" value={60} />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default SkillContainer;
