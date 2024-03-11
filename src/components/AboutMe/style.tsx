import styled from "styled-components";

export const AboutMeContainer = styled.section`
  display: flex;
  height: 50vh;
  justify-content: center;
  align-items: center;
  margin: auto;

  @media (max-width: 768px){
    flex-direction: column;
    padding: 10rem 2rem;
    gap: 2rem;
    margin: auto; 
    height: fit-content;
    
   
  }
`;

export const PictureAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;

  svg {
    font-size: 3rem;
  }

  @media (max-width: 768px){
    display: none;
  }

  img{
    width: 40%;
  }
`;

export const ImgMobile = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 50%;
  }

  @media (max-width: 375px) {
    width: 80%;
  }

   
`

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  gap: 1rem;

  hr {
    height: 5px;
    margin: 0;
    background-image: ${(props) => props.theme.colors.purpleGradient};
    border: 0;
    border-radius: 0 10px 10px 0;
    margin-right: 20%;

    p {
      display: inline-block;
      width: 80%;
    }
  }

  @media (max-width: 768px){
      width: 100%;
      padding: auto;
      text-align: center;
      align-items: center;
      padding: 0;

      hr{
        border-radius: 10px;
        margin-right: 0;
        width: 60%;
      }
      
   
  }
`;

export const ButtonsMobileContainer = styled.div`
  display: none;

  @media(max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }
`
