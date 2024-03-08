import styled from "styled-components";
import { motion } from "framer-motion";

export interface IElementsBanner {
  $desktopimage: string;
  $tabletimage?: string;
  $mobileimage?: string;
}

export const ElementBanner = styled(motion.div)<IElementsBanner>`
  @media (min-width: 769px) {
    background-image: ${(props) => `url(${props.$desktopimage})`};
    background-size: contain;
    background-repeat: no-repeat;
  }

  @media (max-width: 768px) {
    background-image: ${(props) => `url(${props.$tabletimage})`};
    background-size: contain;
    background-repeat: no-repeat;
  }

  @media (max-width: 375px) {
    background-image: ${(props) => `url(${props.$mobileimage})`};
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const CometBase = styled(motion.img).attrs(() => ({
  animate: { scale: [0.7, 1.2, 1,0.7 ] },
  transition: { duration: 10, repeat: Infinity },
}))`
  position: absolute;
  mix-blend-mode: color-dodge;
  filter: blur(2px);

  @media (min-width: 769px) {
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 375px) {
  }
`;
