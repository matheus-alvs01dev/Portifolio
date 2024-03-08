import styled from "styled-components";
import { motion } from "framer-motion";

export const AstronaltContainer = styled(motion.img)`
  width: 10rem;
  height: auto;
  position: absolute;
  left: 70%;
  top: 25%;

  animation: float 20s;
  animation-iteration-count: infinite;

  @keyframes float {
    0% {
      transform: translateY(50px);
      rotate: (90deg);
    }
    50% {
      transform: translateY(12px);
      rotate: (-10deg);
    }
    100% {
      transform: translateY(50px);
      rotate: (90deg);
    }
  }

  @media (max-width: 768px) {
    left: 65%;
    top:70%;
    width: 10rem;
    height: auto;



    @media (max-width: 375px){
    left: 50%;
    top:60%;
    width: 9rem;
    height: auto;
  }}
`;
