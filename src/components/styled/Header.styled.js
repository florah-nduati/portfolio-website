import styled from "styled-components";

export const StyledHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: linear-gradient(to right, #e0879e, #fac078);
  border-bottom: 1px solid black;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    gap: 1rem; /* Added spacing between elements */
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 4rem;
  justify-content: space-between;

  a {
    text-decoration: none;
    text-transform: capitalize;
    color: black;
    font-size: 1.8rem;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
      color: white;
      background: linear-gradient(to right, #5857cd, #b751c2);
      font-size: 1.5;
      padding: 0.5rem;
      border-radius: 5px;
    }
  }

  @media (max-width: 1024px) {
    gap: 3rem;
    flex-wrap: wrap;

    a {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 800px) {
    gap: 2rem;

    a {
      font-size: 1.3rem; /* Reduced font size slightly */
      padding: 0.5rem;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center; /* Align links centrally */
    gap: 1rem;

    a {
      font-size: 1.2rem;
      padding: 0.4rem;
    }
  }
`;

export const LogoLabel = styled.div`
  display: flex;
  align-items: center;
  font-size: 3rem;
  color: blue;
  margin: 3rem;

  p {
    margin-left: 10px;
    font-size: 30px;
    font-weight: bold;
  }

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    margin: 1.5rem;

    p {
      font-size: 28px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
    font-size: 2rem;

    p {
      margin-left: 0;
      font-size: 24px;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;

    p {
      font-size: 22px;
    }
  }
`;
