import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoPython } from "react-icons/io5";
import { SiPrisma } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  StyledTechnologies,
  TechContainer,
  TechCard,
} from "./styled/Technologies.styled";

function Technologies() {
  return (
    <StyledTechnologies id="technologies">
      <h1>Technologies I Use</h1>
      <TechContainer>
        <TechCard>
          <FaHtml5 size={50} color="#E34F26" />
          <h3>HTML5</h3>
          <p>The standard markup language for web pages.</p>
        </TechCard>
        <TechCard>
          <FaCss3Alt size={50} color="#1572B6" />
          <h3>CSS3</h3>
          <p>
            Style sheet language used for describing the presentation of a
            document.
          </p>
        </TechCard>
        <TechCard>
          <FaJs size={50} color="#F7DF1E" />
          <h3>JavaScript</h3>
          <p>Programming language for adding interactivity to web pages.</p>
        </TechCard>
        <TechCard>
          <FaReact size={50} color="#61DAFB" />
          <h3>React</h3>
          <p>A JavaScript library for building user interfaces.</p>
        </TechCard>
        <TechCard>
          <FaNodeJs size={50} color="#8CC84B" />
          <h3>Node.js</h3>
          <p>JavaScript runtime built on Chrome's V8 JavaScript engine.</p>
        </TechCard>
        <TechCard>
          <SiVite size={50} color="#646CFF" />
          <h3>Vite.js</h3>
          <p>
            A fast build tool and development server for modern web projects.
          </p>
        </TechCard>
        <TechCard>
          <FaGit size={50} color="#F05032" />
          <h3>Git</h3>
          <p>A version control system for tracking changes in code.</p>
        </TechCard>
        <TechCard>
          <IoLogoPython size={50} color="yellow" />
          <h3>Python</h3>
          <p>A version control system for tracking changes in code.</p>
        </TechCard>
        <TechCard>
          <IoLogoPython size={50} color="blue" />
          <h3>express</h3>
          <p> A minimalist Node.js web framework, providing essential tools to build robust APIs and web apps with ease.</p>
        </TechCard>
        <TechCard>
          <SiPrisma  size={50} color="red" />
          <h3>Prisma</h3>
          <p>An open-source ORM for Node.js and TypeScript, simplifying database access and management with a type-safe AP</p>
        </TechCard>
        <TechCard>
          <BiLogoPostgresql  size={50} color="blue" />
          <h3>postgresql</h3>
          <p>An advanced open-source relational database management system (RDBMS) known for its strong SQL compliance, extensibility, and support for complex queries and data types.</p>
        </TechCard>
        <TechCard>
          <SiPostman size={50} color="red" />
          <h3>postman</h3>
          <p>A popular API testing tool for sending requests, automating testing, and documenting APIs effectively.</p>
        </TechCard>
      </TechContainer>
    </StyledTechnologies>
  );
}

export default Technologies;