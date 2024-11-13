import styled from "styled-components";
import Slider from "react-slick";

export const StyledProjects = styled.div`
  background: linear-gradient(to right, #9c52c5, #d063b3);
  text-align: center;
  padding: 3rem;

  h1 {
    padding: 1rem;
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    h1 {
      font-size: 2rem;
    }
  }
`;

export const StyledSlider = styled(Slider)`
  width: 60%;
  margin: 0 auto;

  .slick-prev,
  .slick-next {
    top: 50%;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
  }

  .slick-prev:before,
  .slick-next:before {
    color: #000;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const ProjectCard = styled.div`
  padding: 1rem;
  margin: 1.5rem auto;
  border-radius: 10px;
  box-shadow: 5px 2px 9px rgba(0, 0, 0, 0.9);
  text-align: left;
  width: 50%;
  background-color: rgba(255, 255, 255, 0.1);

  h2 {
    font-size: 1.5rem;
    text-align: center;
    color: black;
  }

  p {
    font-size: 1rem;
    text-align: center;
    margin: 1rem 0;
  }

  .languages {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
    width: 70%;

    h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    width: 90%;
    
    h2 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const LanguageCard = styled.div`
  padding: 0.5rem 1rem;
  background: linear-gradient(to right, #5857cd, #b751c2);
  border-radius: 5px;
  box-shadow: 3px 1px 2px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const StyledSocial = styled.div`
  margin-top: 5rem;

  p {
    text-transform: capitalize;
    font-size: 1rem;
    color: #fff;
  }

  a {
    color: black;
    font-size: 2rem;
    transition: color 0.3s;

    &:hover {
      color: #ff6600;
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 1.8rem;
    }

    a {
      font-size: 3rem;
    }
  }

  @media (max-width: 480px) {
    p {
      font-size: 1.5rem;
    }

    a {
      font-size: 2.5rem;
    }
  }
`;
