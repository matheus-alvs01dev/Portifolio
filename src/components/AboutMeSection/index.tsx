import { AboutMeContainer, PictureAndButtonsContainer, ResumeContainer } from "./style";
import { SocialIcons } from "../SocialIcons";
import Button from "../Button";
import profileDesactived from "./perfil-desativado.png";
import profileActivated from "./foto de perfil.png";
import { useState } from "react";

export default function AboutMeSection() {
  const [imageChanged, setImageChanged] = useState(false);

  const handleHover = () => {
    if (!imageChanged) {
      setImageChanged(true);
    }
  };
  const handleClick = () => {
    console.log("parabens");
  };

  return (
    <AboutMeContainer>
      <PictureAndButtonsContainer>
        <img
          src={imageChanged ? profileActivated : profileDesactived}
          alt="Foto de Perfil"
        />
        <SocialIcons />
        <Button onClick={handleClick} onHover={handleHover}>
          ENTRE EM CONTATO!
        </Button>
      </PictureAndButtonsContainer>
      <ResumeContainer>
        <h2> Olá me Chamo<br/> <span>Matheus</span></h2>
      </ResumeContainer>
    </AboutMeContainer>
  );
}
