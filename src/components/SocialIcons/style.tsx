import styled from "styled-components";


interface SocialIconsContainerProps{
  width?: string,
}

export const SocialIconsContainer = styled.ul<SocialIconsContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center; 
  width: ${(props) => props.width || "100%"};

  svg { 
    color: ${props => props.theme.colors.white};
    padding: 1rem .2rem ;
    font-size: 2rem;
    filter: none;
    transition: 0.1s ease-in-out;
    cursor: pointer;
  }
  
  :hover{
    filter: drop-shadow(${(props) => props.theme.sizes.boxShadow});
    
  } 

`;


