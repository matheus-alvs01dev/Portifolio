import styled from "styled-components";

export const AboutMeContainer = styled.section`
  display: flex;
  height: 50vh;
  justify-content: center;
  align-self: center;
   margin: auto;
`;

export const PictureAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  
  svg{
    font-size: 3rem;
  }

  img{
    width: 40%;
  }
`;

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  gap: 1rem;



  hr {
    height: 5px;
    margin: 0;
    background-image: ${props => props.theme.colors.purpleGradient};
    border: 0;
    border-radius: 0 10px 10px 0;
    margin-right: 20%;

    p{
        display: inline-block;
        width: 80%;
    }
  }
`;
