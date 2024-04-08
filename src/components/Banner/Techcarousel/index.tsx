import { TechCarouselContainer, TechItem } from "./style";
import { FaReact, FaJava } from "react-icons/fa";
import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";
import { SiSpring } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { FaLaravel } from "react-icons/fa6";
import { SiNodedotjs } from "react-icons/si";

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
      <TechItem>
        <SiPhp />
      </TechItem>
      <TechItem>
        <FaLaravel />
      </TechItem>
      <TechItem>
        <SiNodedotjs />
      </TechItem>
    </TechCarouselContainer>
  );
}

export default TechCarousel;
