import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  width: 100vw;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.footerBackground};
`;

export const FooterContent = styled.div`
  display: flex;
  padding: 2rem 1rem;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  max-width: 1200px;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;

    button {
      font-size: 1rem;
      width: 60%;
      padding: 0.5rem 1rem;
    }
  }
`;
