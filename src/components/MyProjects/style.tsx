import styled from "styled-components";

export const MyProjectsContainer = styled.section`
  display: flex;
  position: relative;
  padding: 0 1rem 10rem 1rem;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: auto;
  margin-top: 0;

  h1 {
    width: 100%;
    padding: 0 0 5rem 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding:  0 1rem 5rem 1rem;
    height: fit-content;
    gap: 2.4rem;
  }
`;

export const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
  padding: 10rem 0;

  svg {
    font-size: 8rem;
    animation: arrowAnimation 2s ease-in-out infinite;
    color: ${(props) => props.theme.colors.purple};
  }

  @keyframes arrowAnimation {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 5rem 0;
    
  }
`;

export const CardsContainer = styled.section`
  display: grid;
  justify-content: center;
  margin: auto;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  column-gap: 0rem;
  row-gap: 2rem;
  column-gap: 2rem;
`;
