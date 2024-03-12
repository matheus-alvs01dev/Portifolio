import styled from "styled-components";

export const NotFoundContainer = styled.section`
  display: flex;
  height: 100vh;
  width: 100vw;
  margin: auto;
  justify-content: center;
  align-items: center;
  max-width: 1200px;

  @media (max-width: 980px) {
    flex-direction: column-reverse;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  text-align: left;
  gap: 1rem;
  justify-content: center;

  h1 {
    text-align: left;
  }

  hr {
    height: 5px;
    margin: 0;
    background-image: ${(props) => props.theme.colors.purpleGradient};
    border: 0;
    border-radius: 0 10px 10px 0;
    margin-right: 20%;
  }

  span {
    font-family: "roboto", sans-serif;
    font-size: 2rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.white};
  }

  @media (max-width: 980px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1rem;
    h1 {
      font-size: 1.5rem;
      text-align: center;
    }
    hr {
      height: 5px;
      margin: 10px;
      width: 60%;
      border-radius: 10px;
      span {
        font-size: 1rem;
      }
    }
  }
`;

export const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 48%;
  text-align: center;
  align-items: center;
  gap: 2rem;
  img {
    border: ${(props) => props.theme.sizes.borderSolid};
    border-color: ${(props) => props.theme.colors.purple};
    filter: drop-shadow(${(props) => props.theme.sizes.boxShadow});
    width: 90%;
    height: 90%;
    object-fit: cover;
    border-radius: 50%;
  }

  h3 {
    font-family: "montserrat", sans-serif;
    font-size: 5rem;
    font-weight: 800;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.white};
  }

  @media (max-width: 980px) {
    h3 {
      font-size: 2rem;
    }
  }
`;
