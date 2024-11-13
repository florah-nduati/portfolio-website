import styled from "styled-components";

export const StyledContact = styled.div`
  background: linear-gradient(to right, #5357cd, #a652c4);
  padding: 5rem;
  
  h1 {
    text-transform: capitalize;
    font-size: 3rem;
    text-align: center;
  }

  p {
    text-align: center;
    line-height: 3rem;
    margin: 0 10rem;
    text-transform: capitalize;
    padding-top: 4rem;
  }

  .contact-links {
    display: flex;
    justify-content: center;
    gap: 5rem;
    margin: 2rem;
  }

  .contact-link {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    color: #fac078;
    font-size: 1rem;
    justify-content: space-between;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .contact-link:hover {
    color: #ffeb3b;
  }

  .footer {
    text-align: center;
    margin-top: 2rem;
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 2rem;
    }

    p {
      margin: 0 8rem;
      font-size: 1rem;
    }

    .contact-link {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    padding: 4rem;

    h1 {
      font-size: 2rem;
    }

    p {
      margin: 0 4rem;
      font-size: 1.4rem;
    }

    .contact-links {
      flex-direction: column;
      gap: 3rem;
    }

    .contact-link {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 3rem;

    h1 {
      font-size: 2rem;
    }

    p {
      margin: 0 2rem;
      font-size: 1.5rem;
    }

    .contact-link {
      font-size: 1rem;
    }
  }
`;
