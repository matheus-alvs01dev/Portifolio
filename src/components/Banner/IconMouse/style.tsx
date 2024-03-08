
import styled, { keyframes } from 'styled-components';

export const ScrollDownsWrapper = styled.div`
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
  width: 3rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

export const Mousey = styled.div`
  width: 1.8rem;
  padding: 1.2rem .5rem;
  height: 2rem;
  border: 0.1rem solid ${props=>props.theme.colors.white};
  border-radius: 2rem;
  opacity: 0.75;
  box-sizing: content-box;
  display: flex;
  justify-content: center;
`;

const ScrollerAnimation = keyframes`
  0% { opacity: 0; }
  10% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(0.9rem); opacity: 0;}
`;

export const Scroller = styled.div`
  width: 0.4rem;
  height: 0.8rem;
  border-radius: 25%;
  background-color: #fff;
  animation-name: ${ScrollerAnimation};
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(.15,.41,.69,.94);
  animation-iteration-count: infinite;
`;