import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithubSquare } from "react-icons/fa";
import {
  StyledProjects,
  StyledSlider,
  ProjectCard,
  LanguageCard,
  StyledSocial,
} from "./styled/Projects.styled";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills.",
    languages: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Urban Haven Apartments",
    description: "A website for Urban Haven Apartments.",
    languages: ["HTML", "JavaScript", "CSS"],
  },
  {
    title: "Rock Paper Scissors",
    description: "A Rock Paper Scissors game.",
    languages: ["React", "HTML", "JavaScript", "CSS"],
  },
  {
    title: "Murang'a University Tech Club",
    description: "A website for Murang'a University Technology Club.",
    languages: ["React", "HTML", "JavaScript", "CSS"],
  },
  {
    title: "blogIt",
    description: "A fullstack appliation,blogging website.",
    languages: ["React", "HTML", "JavaScript", "CSS" ,"express", "prisma", "node.js"],
  },
];

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <StyledProjects id="projects">
      <h1>My Projects</h1>
      <StyledSlider {...settings}>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="languages">
              {project.languages.map((language, i) => (
                <LanguageCard key={i}>{language}</LanguageCard>
              ))}
            </div>
          </ProjectCard>
        ))}
      </StyledSlider>

      <StyledSocial>
        <p>Check out my GitHub for more projects:</p>
        <a
          href="https://github.com/florah-nduati"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>
      </StyledSocial>
    </StyledProjects>
  );
}

export default Projects;