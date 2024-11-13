import styled from "styled-components";

export const StyledAbout = styled.div`
  background: linear-gradient(to right, #c952bf, #e69593);
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
  }
`;

export const Texts = styled.div`
  width: 50%;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
  padding: 2rem;

  h1 {
    text-transform: capitalize;
    text-align: center;
    margin: 1rem;
    font-size: 2.5rem;
  }

  p {
    margin: 0.8rem;
    line-height: 1.8rem;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1.1rem;
      line-height: 1.6rem;
      margin: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.6rem;
      margin: 1rem;
    }
  }
`;

export const Profile = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    padding: 1rem;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
    object-fit: cover;

    @media (max-width: 768px) {
      width: 100%;
      padding: 1rem 0;
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  }
`;