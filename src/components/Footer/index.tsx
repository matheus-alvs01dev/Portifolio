import Button from "../Button";
import { SocialIcons } from "../SocialIcons";
import { FooterContainer, FooterContent} from "./styles";

export default function Footer() {
  const handleClick = () => {
    window.open("https://wa.link/ro0439", "_blank");
  };

  return (
    <FooterContainer>
      <FooterContent>
        <SocialIcons width="30%" />
        <Button
          fontSize="1rem"
          width="30%"
          onClick={handleClick}
          padding="0.5rem 1rem"
        >
          ENTRE EM CONTATO!
        </Button>
      </FooterContent>
    </FooterContainer>
  );
}
