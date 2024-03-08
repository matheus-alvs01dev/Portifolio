import styled from "styled-components";
import { ElementBanner } from "../style";


export const PlanetR = styled(ElementBanner)`
  width: 185px;
  height: 185px;
  position: absolute;
  bottom: 25%; 
  right: 240px;  

  @media (max-width: 768px) {
    bottom: 30%; 
    right: -100px; 
     
  }


  @media (max-width: 375px){
    display: none;
  }

  
`

export const PlanetL = styled(ElementBanner)`
  width: 350px;
  height: 350px;
  position: absolute;
  bottom: 50%; 
  left: 5px; 

  @media (max-width: 768px) {
    bottom: 60%; 
    left: -100px; 
     
  }

  @media (max-width: 375px){
    display: none;
  }


`;
