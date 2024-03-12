import styled from "styled-components";

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  background-color: ${(props) => props.theme.colors.white};
  padding: 1.5rem 1rem;
  margin: 0 auto;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 540px;
  max-width: 540px;
  height: fit-content;
  min-height: 250px;
  border: ${(props) => props.theme.sizes.borderSolid};
  border-color: ${(props) => props.theme.colors.purple};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  box-shadow: 0 5px 15px rgba(67, 48, 181, 0.4);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 450px;
    padding: 1rem;
  }
  @media (max-width: 480px) {
    width: 250px;
    grid-template-columns: 1fr;
    height: auto;
    padding: 1rem;
  }
`;

export const BannerAndTagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const ProjectsBanner = styled.img`
  object-fit: cover;
  width: 100%;
  height: 135px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};

  @media (max-width: 768px) {
    width: 250px;
    height: 125px;
  }
`;

export const ProjectsTagsContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 260px;
  padding: 0.6rem;
  gap: 0.6rem;
`;

export const Tag = styled.li`
  font-family: "open sans", sans-serif;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  text-transform: uppercase;
  font-size: 0.8rem;
  background: ${(props) => props.theme.colors.purpleGradient};
  padding: 0.2rem 0.5rem;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;

export const AboutProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  gap: 0.6rem;
`;

export const TitleAndParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  h3 {
    font-family: "montserrat", sans-serif;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 1.8rem;
    margin: 0;
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.gray};
    font-weight: 400;
    width: 100%;
  }

  @media (max-width: 480px) {
    h3,
    p {
      text-align: center;
    }
  }
`;

export const ProjectLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  align-self: end;

  svg {
    color: ${(props) => props.theme.colors.purple};
    padding: 1rem 0.2rem;
    font-size: 1.8rem;
    filter: none;
    transition: 0.1s ease-in-out;
  }

  :hover {
    filter: drop-shadow(${(props) => props.theme.sizes.boxShadow});
  }

  button:hover {
    transform: scale(1);
  }

  @media (max-width: 768px) {
    button {
      width: 80%;
      padding: 0.5rem;
    }
  }
  @media (max-width: 480px) {
    padding: 0.2rem;
  }
`;
