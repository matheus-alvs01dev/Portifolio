import styled from "styled-components";
import { ElementBanner } from "../style";

export const BigPlanetR = styled(ElementBanner)`
  width: 800px;
  height: 800px;
  position: absolute;
  top: -200px;
  right: -550px;
  mix-blend-mode: luminosity;
  opacity: 0.3;

  @media (max-width: 768px) {
    mix-blend-mode: overlay;
    top: -400px;
    right: -300px;
    opacity: 0.8;
  }

  @media (max-width: 375px) {
    mix-blend-mode: overlay;
    top: -400px;
    right: -500px;
    opacity: 0.8;
  }
`;

export const BigPlanetL = styled(ElementBanner)`
  width: 800px;
  height: 800px;
  position: absolute;
  bottom: -100px;
  left: -200px;
  background-position: bottom;
  mix-blend-mode: overlay;

  @media (max-width: 768px) {
    bottom: -350px;
    left: -380px;
  }

  @media (max-width: 375px) {
    bottom: -380px;
    left: -400px;
  }
`;
