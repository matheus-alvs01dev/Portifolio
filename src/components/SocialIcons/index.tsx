import { FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";
import {  SocialIconsContainer } from "./style";
import { MdEmail } from "react-icons/md";
import useEmailCopyServices from "../../services/useEmailCopyServices";


interface SocialIconsProps{
  width?: string;
}

export function SocialIcons({width}: SocialIconsProps) {
  const { copyEmail} = useEmailCopyServices();

  return (
    <SocialIconsContainer width={width}>
      <li>
        <a href="https://www.linkedin.com/in/matheus-alves-a96a331b7/" target="_blank">
          <FaLinkedinIn />
        </a>
      </li>
      <li>
        <a href="https://wa.link/ro0439" target="_blank">
          <FaWhatsapp />
        </a>
      </li>
      <li>
        <a href="https://github.com/matheus-alvs01dev" target="_blank">
          <FaGithub />
        </a>
      </li>
      <li>
        <MdEmail onClick={() => { copyEmail()}} />
      </li>
    </SocialIconsContainer>
  );
}
