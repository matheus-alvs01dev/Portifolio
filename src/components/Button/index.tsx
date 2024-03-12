import { MouseEventHandler } from "react";
import { ButtonContainer } from "./style";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  onHover?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
  width?: string;
  fontSize?: string;
  padding?: string;
}

export default function Button({
  onClick,
  children,
  onHover,
  onMouseLeave,
  width = "100%", 
  fontSize = "1rem",
  padding = "0.5rem 1rem", 
}: ButtonProps) {
  return (
    <ButtonContainer
      onClick={onClick}
      onMouseEnter={onHover}
      width={width}
      onMouseLeave={onMouseLeave}
      fontSize={fontSize}
      padding={padding}
    >
      {children}
    </ButtonContainer>
  );
}
