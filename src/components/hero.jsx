import React from "react";
import { FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import image from "../assets/me.jpeg";
import {
  StyledContainer,
  Texts,
  Button,
  Social,
  Profile,
} from "./styled/Hero.styled";

const HeroComponent = ({ greetings, name, skill, description, btn }) => {
  return (
    <StyledContainer>
      <Texts>
        <h3>{greetings}</h3>
        <h1>{name}</h1>
        <h2>{skill}</h2>
        <h4>{description}</h4>
        <Button>{btn}</Button>
        <Social>
          <p>Check out my social profiles:</p>
          <div className="social-icons">
            <a
              href="https://github.com/florah-nduati"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare />
            </a>
            <a
              href="https://linkedin.com/in/florah-nduati-ab14b724b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://instagram.com/pflozzie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare />
            </a>
          </div>
        </Social>
      </Texts>
      <Profile>
        <img src={image} alt="Florah Nduati's profile image" />
      </Profile>
    </StyledContainer>
  );
};

function Hero() {
  return (
    <HeroComponent
      greetings="Hello there 👋"
      name="I am Florah Nduati"
      skill="Full stack developer"
      description="Crafting code from concept to deployment, end to end. Transforming ideas into interactive, reliable solutions."
      btn="Let's talk"
    />
  );
}

export default Hero;