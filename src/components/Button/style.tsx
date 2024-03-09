import styled from "styled-components";

interface ButtonProps{
  width: string,
}

export const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: center;
  width: ${props => props.width};
  align-items: center;
  background: ${(props) => props.theme.colors.purpleGradient};
  color: ${(props) => props.theme.colors.white};
  border: ${(props) => props.theme.sizes.borderSolid};
  border-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "roboto", sans-serif;
  transition: all 0.4s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.purple};
    transform: scale(1.1);
    box-shadow: 0 5px 15px rgba(145, 92, 182, 0.4);
  }

`;
