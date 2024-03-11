import {
  AboutMeContainer,
  ButtonsMobileContainer,
  ImgMobile,
  PictureAndButtonsContainer,
  ResumeContainer,
} from "./style";
import { SocialIcons } from "../SocialIcons";
import Button from "../Button";
import profileDesactived from "./perfil-desativado.png";
import profileActivated from "./foto de perfil.png";
import useImageServices from "../../services/useImageServices";

export default function AboutMe() {
  const { handleHover, handleMouseLeave, handleClick, imageChanged } = useImageServices();

  return (
    <AboutMeContainer>
      <PictureAndButtonsContainer>
        <img
          src={imageChanged ? profileActivated : profileDesactived}
          alt="Foto de Perfil"
        />
        <SocialIcons />
        <Button
          onClick={handleClick}
          onHover={handleHover}
          onMouseLeave={handleMouseLeave}
          width="50%"
          fontSize="1.4rem"
          padding="0.5rem 1rem"
        >
          ENTRE EM CONTATO!
        </Button>
      </PictureAndButtonsContainer>
      <ImgMobile src={profileActivated} />
      <ResumeContainer>
        <h2>
          {" "}
          Olá me Chamo
          <br /> <span>Matheus</span>
        </h2>
        <hr />
        <p>
          Sou apaixonado por desenvolvimento e atualmente estou cursando
          Sistemas de Informação na Univale. Nos últimos dois anos, fiz uma
          transição de carreira, dedicando-me ao estudo e desenvolvimento de
          projetos desafiadores. Sempre em busca de novos horizontes, adoro
          enfrentar desafios que me tiram da zona de conforto.{" "}
        </p>
        <p>
          Fora do universo da tecnologia, sou um jovem apaixonado por música,
          especialmente por tocar violão, e jogar VideoGame;
        </p>
      </ResumeContainer>
      <ButtonsMobileContainer>
        <SocialIcons />
        <Button fontSize="1rem" width="100%" onClick={handleClick} padding="0.5rem 1rem">
          ENTRE EM CONTATO!
        </Button>
      </ButtonsMobileContainer>
    </AboutMeContainer>
  );
}
