import { TechCarouselContainer, TechItem } from "./style";
import { FaReact, FaJava } from "react-icons/fa";
import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";
import { SiSpring } from "react-icons/si";


function TechCarousel() {
  return (
    <TechCarouselContainer>
      <TechItem>
        <FaReact />
      </TechItem>
      <TechItem>
        <BiLogoJavascript />
      </TechItem>
      <TechItem>
        <BiLogoTypescript />
      </TechItem>
      <TechItem>
        <FaJava />
      </TechItem>
      <TechItem>
        <SiSpring />
      </TechItem>
    </TechCarouselContainer>
  );
}

export default TechCarousel;
