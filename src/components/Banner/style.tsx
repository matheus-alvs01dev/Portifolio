import styled from "styled-components";
import { motion } from "framer-motion";

interface StyledBannerProps {
    $bgBanner: string; 
  }


  
export const BannerContainer= styled(motion.section)<StyledBannerProps>`
    display: flex;
    position: relative;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    max-width: 100vw;
    min-height: 100vh;
    max-height: 2560px;
    width: 100%;
    background-image: ${(props) => `url(${props.$bgBanner})`};
    background-size: cover;
    background-repeat: no-repeat;
    margin:0;
    padding: 0;
`
export const SocialAndLogoContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    flex-direction: column;    
`


export const Logo = styled.img`
    width: 40rem;

    @media (max-width: 768px) {
        width:80%;
    }
    
`
