import styled from "styled-components";

export const MyProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: auto;
  gap:5rem;

  h1 {
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5rem 2rem;
    height: fit-content;
    gap: 2.4rem;
  }
`;

export const CardsContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  padding:  0 1rem 1rem 0;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  column-gap: 0rem;
  row-gap: 2rem;
  column-gap: 2rem;
`;
