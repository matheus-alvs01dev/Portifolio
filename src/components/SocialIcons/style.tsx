import styled from "styled-components";

export const SocialIconsContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center; 

  svg { 
    color: ${props => props.theme.colors.white};
    padding: 1rem .2rem ;
    font-size: 2rem;
    filter: none;
    transition: 0.1s ease-in-out;
  }
  
  :hover{
    filter: drop-shadow(${(props) => props.theme.sizes.boxShadow});
    
  } 

`;
