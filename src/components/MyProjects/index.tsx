import Card from "../Card";
import { CardsContainer, MyProjectsContainer,ArrowContainer } from "./style";
import projects from "../../json/db.json";
import { IoIosArrowDown } from "react-icons/io";

export default function MyProjects() {
  return (
    <MyProjectsContainer>
      <ArrowContainer>
        <IoIosArrowDown />
      </ArrowContainer>

      <h1>Meus Projetos</h1>
      <CardsContainer>
        {projects.map((project) => (
          <Card
            key={project.id}
            id={project.id}
            title={project["title do projeto"]}
            description={project["description"]}
            tags={project.tags}
            linkProject={project["project link"]}
            linkRepository={project["Repository link"]}
            image={project["project image"]}
          />
        ))}
      </CardsContainer>
    </MyProjectsContainer>
  );
}
