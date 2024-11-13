import React from "react";
import image3 from "../assets/about.jpg";
import { StyledAbout, Texts, Profile } from "./styled/About.styled";

function About() {
  return (
    <StyledAbout id="about">
      <Texts>
        <h1>About Me</h1>
        <p>
          I'm a full stack developer. As a passionate full-stack developer, I thrive in creating seamless and dynamic web applications that deliver exceptional user experiences. With expertise in both front-end and back-end technologies, I bring a well-rounded skill set to every project, ensuring that both the user interface and server-side functionality are built to the highest standards. I am committed to continuous learning and staying up-to-date with the latest technologies, enabling me to tackle complex challenges and bring innovative solutions to life.
        </p>
      </Texts>
      <Profile>
        <img src={image3} alt="about image" />
      </Profile>
    </StyledAbout>
  );
}

export default About;