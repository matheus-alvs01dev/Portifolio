import { SocialIcons } from "../SocialIcons";
import { BannerContainer, Logo, SocialAndLogoContainer } from "./style";
import imageLogo from "./imagesBanner/logo-matheus-alves.png";
import TechCarousel from "./Techcarousel";
import bgBanner from "./imagesBanner/banner-desktop.jpg";
import IconMouse from "./IconMouse";
import ElementsBanner from "./ElementsBanner";
import { useScroll, useTransform, } from "framer-motion";
import { useEffect,useState } from "react";




export default function Banner() {

    

    const { scrollY } = useScroll();
    const SocialIconsAndLogoScale = useTransform(scrollY, [0, 800], [1, 1.8]);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      const unsubscribeScrollY = scrollY.on("change",y => {
        setScrollPosition(y);
      });
  
      return () => {
        unsubscribeScrollY();
      };
    }, [scrollY]);
    
    const blurValue = Math.min(scrollPosition / 50, 10);
    
  return (
    <BannerContainer $bgBanner={bgBanner} style={{filter: `blur(${blurValue}px)`}}>
        
      <SocialAndLogoContainer style={{scale: SocialIconsAndLogoScale}} >
        <SocialIcons />
        <Logo src={imageLogo} />
        <TechCarousel />
      </SocialAndLogoContainer>
      <ElementsBanner/>
      <IconMouse />
    </BannerContainer>
  );
}
