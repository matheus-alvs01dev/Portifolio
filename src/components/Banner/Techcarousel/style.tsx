import styled from "styled-components";

export const TechCarouselContainer = styled.ul`
display: flex;
`;

export const TechItem = styled.li`
  svg {
    color: ${props => props.theme.colors.white};
    font-size: 3rem;
    transition: all 0.3s;
    transform-origin: 50% 50%;
    padding: 3rem.5rem;

  }
 
  svg:hover  {
    transform: scale(1.2);
  }

  @media (max-width: 375px) {

    svg{
      font-size: 2rem;
    }
    
  }
`;
