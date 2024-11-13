import React from "react";
import { FaLightbulb } from "react-icons/fa";
import { Link } from "react-scroll";
import { StyledHeading, NavLinks, LogoLabel } from "./styled/Header.styled";

const HeadingItems = ({ name, logo, label }) => {
  return (
    <div>
      <LogoLabel>
        <p>{name}</p>
        {logo}
        <p>{label}</p>
      </LogoLabel>
      <NavLinks>
        <Link to="home" smooth={true} duration={3000}>
          Home
        </Link>
        <Link to="about" smooth={true} duration={2000}>
          About
        </Link>
        <Link to="technologies" smooth={true} duration={3000}>
          Technologies
        </Link>
        <Link to="projects" smooth={true} duration={3000}>
          Projects
        </Link>
        <Link to="projects" smooth={true} duration={3000}>
          Certifications
        </Link>
        <Link to="contacts" smooth={true} duration={3000}>
          Contacts
        </Link>
      </NavLinks>
    </div>
  );
};

function Header() {
  return (
    <StyledHeading>
      <HeadingItems
        logo={<FaLightbulb />}
        name="florah nduati"
        label="Portfolio"
      />
    </StyledHeading>
  );
}

export default Header;