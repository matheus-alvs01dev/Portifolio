import Card from "../Card";
import { CardsContainer, MyProjectsContainer } from "./style";
import projects from "../../json/db.json";

export default function MyProjects() {
  return (
    <MyProjectsContainer>
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
