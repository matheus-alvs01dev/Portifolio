import styled from "styled-components";
import { motion } from "framer-motion";

export const SatelliteContainer = styled(motion.img)`
  width: 184px;
  height: 240px;
  position: absolute;
  left: 20%;
  top: 10%;
  filter: drop-shadow(30px 10px 40px #000000);

  animation: float 20s;
  animation-iteration-count: infinite;

  @keyframes float {
    0% {
      transform: translateY(12px);
      rotate: (-10deg);
    }
    50% {
      transform: translateY(50px);
      rotate: (90deg);
    }
    100% {
      transform: translateY(12px);
      rotate: (-10deg);
    }
  }

  @media (max-width: 768px) {
    left: 20%;
    top: 5%;
    width: 10rem;
    height: auto;
  }


    @media (max-width: 375px){
    left: 18%;
    top: 8%;
    width: 9rem;
    height: auto;
  }
`;
