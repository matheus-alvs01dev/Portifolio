import styled from "styled-components";

export const MyProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5rem 2rem;
    height: fit-content;
    gap: 2.4rem;
  }
`;

export const CardsContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0rem;
  align-items: center;
  gap: 5rem;
`;
