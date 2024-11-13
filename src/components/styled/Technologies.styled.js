import styled from "styled-components";

export const StyledTechnologies = styled.div`
  background: linear-gradient(to right, #a652c4, #d874a9);
  padding: 2rem;
  text-align: center;
  color: white;

  h1 {
    text-transform: capitalize;
    color: black;
  }
`;

export const TechContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 2rem 0;
`;

export const TechCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 2rem;
  margin: 1rem;
  width: calc(25% - 2rem);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    width: calc(50% - 2rem);
  }

  @media (max-width: 480px) {
    width: 100%;

    h1{
      font-size:1rem;
    }
  }
`;