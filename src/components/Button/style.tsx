import styled from "styled-components";

interface ButtonProps {
  width: string;
  fontSize: string;
  padding: string;
}

export const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  height: fit-content;
  padding: ${(props) => props.padding};
  justify-content: center;
  width: ${(props) => props.width};
  background: ${(props) => props.theme.colors.purpleGradient};
  color: ${(props) => props.theme.colors.white};
  border: ${(props) => props.theme.sizes.borderSolid};
  border-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  cursor: pointer;
  font-size: ${(props) => props.fontSize};
  font-weight: 700;
  text-transform: uppercase;
  font-family: "roboto", sans-serif;
  transition: all 0.4s ease-in-out;
  

  &:hover {
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.purple};
    transform: scale(1.1);
    box-shadow: ${(props) => props.theme.sizes.boxShadow};
  }

  
`;
