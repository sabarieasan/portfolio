import React from "react";
import { Element } from "react-scroll";
import Project from "../Project/Project";
import "./ProjectContainer.css";

const ProjectContainer = () => {
  const projects = [
    {
      img: "https://www.drupal.org/files/project-images/modal-screenshot-3.png",
      title: "modal",
      desc: "A show modal project. ",
      link: "www.google.com",
    },
    {
      img: "https://www.drupal.org/files/project-images/modal-screenshot-3.png",
      title: "modal",
      desc: "A show modal project. ",
      link: "www.google.com",
    },
    {
      img: "https://www.drupal.org/files/project-images/modal-screenshot-3.png",
      title: "modal",
      desc: "A show modal project. ",
      link: "www.google.com",
    },
    {
      img: "https://www.drupal.org/files/project-images/modal-screenshot-3.png",
      title: "modal",
      desc: "A show modal project. ",
      link: "www.google.com",
    },
    {
      img: "https://www.drupal.org/files/project-images/modal-screenshot-3.png",
      title: "modal",
      desc: "A show modal project. ",
      link: "www.google.com",
    },
    {
      img: "https://www.drupal.org/files/project-images/modal-screenshot-3.png",
      title: "modal",
      desc: "A show modal project. ",
      link: "www.google.com",
    },
  ];
  return (
    <Element className="projectContainer" id="projects">
      <h1>Projects</h1>
      <p>Here are some projects which i have done.</p>

      <div className="projectContainer-projects">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              img={project.img}
              title={project.title}
              desc={project.desc}
              link={project.link}
            />
          );
        })}
      </div>
    </Element>
  );
};

export default ProjectContainer;
