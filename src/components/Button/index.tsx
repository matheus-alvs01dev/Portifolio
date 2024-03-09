import { MouseEventHandler } from "react";
import { ButtonContainer } from "./style";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  onHover: MouseEventHandler<HTMLButtonElement>;
}


export default function Button({onClick, children, onHover}: ButtonProps) {
  return <ButtonContainer onClick={onClick} onMouseEnter={onHover}>{children}</ButtonContainer>;
}
