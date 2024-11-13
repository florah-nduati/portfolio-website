import styled from "styled-components";

export const StyledHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: linear-gradient(to right, #e0879e, #fac078);
  border-bottom: 1px solid black;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 4rem;
  justify-content: space-between;

  a {
    text-decoration: none;
    text-transform: capitalize;
    margin: 0 1rem;
    color: black;
    font-size: 1.8rem;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: white;
      background: linear-gradient(to right, #5857cd, #b751c2);
      font-size: 2rem;
      padding: 1rem;
      border-radius: 5px;
    }
  }

  @media (max-width: 1024px) {
    gap: 3rem;
    margin-left: 0;
    flex-wrap: wrap;

    a {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 800px) {
    gap: 2rem;
    a {
      font-size: 1.5rem;
      padding: 0.5rem;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    a {
      font-size: 1.3rem;
      padding: 0.5rem;
    }
  }
`;

export const LogoLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: blue;
  margin: 3rem;

  p {
    margin-left: 10px;
    font-size: 30px;
    font-weight: bold;
    justify-content: center;
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
