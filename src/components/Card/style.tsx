import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};
  padding: 1.5rem 1rem;
  margin: auto;
  width: 540px;
  max-width: 540px;
  height: auto;
  border: ${(props) => props.theme.sizes.borderSolid};
  border-color: ${(props) => props.theme.colors.purple};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  box-shadow: 0 5px 15px rgba(67, 48, 181, 0.4);

  @media (max-width: 768px) {
    flex-direction: row;
    width: 450px;
    height: 208px;
    padding: 1rem;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: auto;
    padding: 1rem 1rem;
    gap: 1rem;
  }
`;

export const BannerAndTagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;


@media (max-width: 480px) {
  width: 100%;
}
`;

export const ProjectsBanner = styled.img`
  object-fit: cover;
  width: 208px;
  height: 125px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};

  @media (max-width: 768px) {
    flex-direction: column;
    width: 208px;
    height: 125px; 
  }


  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    height: auto;   
  }
`;

export const ProjectsTagsContainer = styled.ul`
  display: flex;
  justify-content: center;
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
  width: 45%;
  height: 100%;
  justify-content: center;
  gap: 0.6rem;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 0rem 0.5rem;
  }
  

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
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.gray};
    font-weight: 400;
    width: 100%;
  }


  @media (max-width: 480px) {
    text-align: center;
    

  h3 {
    font-family: "montserrat", sans-serif;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 1.8rem;
    
  }

  p {
    font-size: 1rem;
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
    padding: .2rem;
  }
   
   

`;
