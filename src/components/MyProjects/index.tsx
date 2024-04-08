import { useState, useEffect } from 'react';
import Card from "../Card";
import { CardsContainer, MyProjectsContainer, ArrowContainer } from "./style";
import { IoIosArrowDown } from "react-icons/io";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  linkProject: string;
  linkRepository: string;
  image: string;
}

export default function MyProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    fetch("https://dev.matheusalvesbarroso.com.br/database/db.json")
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
    };

  return (
    <MyProjectsContainer>
      <ArrowContainer>
        <IoIosArrowDown />
      </ArrowContainer>

      <h1>Meus Projetos</h1>
      <CardsContainer>
        {projects.map((project: Project) => (
          <Card
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            linkProject={project.linkProject}
            linkRepository={project.linkRepository}
            image={project.image}
          />
        ))}
      </CardsContainer>
    </MyProjectsContainer>
  );
}
