import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  background: linear-gradient(to right, #ce5db8, #eea689);
  flex-direction: row;
  align-items: center;
  height: 100vh;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 2rem;
    height: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media (max-width: 480px) {
    margin: 0;
    padding: 1rem;
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  text-align: center;

  h1, h2, h3, h4 {
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;

    h1 {
      font-size: 2.2rem;
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.6rem;
    }

    h4 {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0.5rem;

    h1 {
      font-size: 1.8rem;
    }

    h2 {
      font-size: 1.6rem;
    }

    h3 {
      font-size: 1.4rem;
    }

    h4 {
      font-size: 1.2rem;
    }
  }
`;

export const Button = styled.button`
  color: white;
  background: linear-gradient(to right, #5857cd, #b751c2);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #555;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
  }
`;

export const Social = styled.div`
  margin-top: 20px;
  text-align: center;

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 3rem;
  }

  a {
    color: #5857cd;
    font-size: 2rem;
    align-items: center;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.9);
    transition: color 0.3s;

    &:hover {
      color: #ff6600;
      font-size: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    .social-icons {
      gap: 20px;
    }

    a {
      font-size: 2.2rem;
    }
  }

  @media (max-width: 480px) {
    .social-icons {
      gap: 10px;
    }

    a {
      font-size: 2rem;
    }
  }
`;

export const Profile = styled.div`
  width: 50%;
  gap: 2rem;
  margin: 3rem;
  height: 100%;
  display: flex;
  flex-direction: row;

  img {
    width: 70%;
    height: 70%;
    padding: 2rem;
    margin: 4rem;
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
    border-radius: 50%;

    @media (max-width: 768px) {
      width: 80%;
      height: auto;
      margin: 3rem auto;
      padding: 1rem;
    }

    @media (max-width: 480px) {
      width: 90%;
      margin: 1rem auto;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 2rem 0;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    margin: 1rem 0;
  }
`;