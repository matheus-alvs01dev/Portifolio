import {
  AboutProjectContainer,
  BannerAndTagsContainer,
  CardContainer,
  ProjectsBanner,
  ProjectsTagsContainer,
  Tag,
  ProjectLinksContainer,
  TitleAndParagraphContainer,
} from "./style";

import Button from "../Button";
import { FaGithub } from "react-icons/fa";


interface CardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  linkProject: string;
  linkRepository: string;
  image: string;
}

export default function Card({
id,
  title,
  description,
  tags,
  linkProject,
  linkRepository,
  image,
}: CardProps) {

  
  const handleClick = () => {
    window.open(linkProject, "_blank");
  };

  return (
    <CardContainer key={id}>
      <BannerAndTagsContainer>
        <ProjectsBanner src={image} />
        <ProjectsTagsContainer>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </ProjectsTagsContainer>
      </BannerAndTagsContainer>
      <AboutProjectContainer>
        <TitleAndParagraphContainer>
          <h3>{title}</h3>
          <p>{description}</p>
        </TitleAndParagraphContainer>
        <ProjectLinksContainer>
          <Button
            fontSize="1rem"
            width="60%"
            onClick={handleClick}
            padding="0.2rem 1rem"
          >
            Ver Projeto
          </Button>
          <a href={linkRepository} target="blank">
            <FaGithub />
          </a>
        </ProjectLinksContainer>
      </AboutProjectContainer>
    </CardContainer>
  );
}
