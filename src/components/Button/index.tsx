import { MouseEventHandler } from "react";
import { ButtonContainer } from "./style";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  onHover: MouseEventHandler<HTMLButtonElement>;
  width: string;
}


export default function Button({onClick, children, onHover, width}: ButtonProps) {
  return <ButtonContainer onClick={onClick} onMouseEnter={onHover} width={width}>{children}</ButtonContainer>;
}
