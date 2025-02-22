import React from "react";
import styled from "styled-components";
import Container from "./Container";

const ProjectsSection = styled.section`
  background: ${(props) => props.theme.background};
  padding: 40px 0;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); // Responsive grid
  gap: 20px;
  margin-top: 20px;
`;

const ProjectCard = styled.div`
  height: 300px;
  background: #fff;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column; // Vertical layout
  align-items: center;
  justify-content: flex-start; // Align content to the top
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05); // Slightly less scaling for projects
  }

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${(props) => props.bgColor || "#ddd"};
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    z-index: 0;
  }

  &:hover:before {
    opacity: 0.2;
  }
`;

const ProjectImage = styled.img`
  width: 100%; // Fill the card width
  height: 150px; // Fixed height for images
  object-fit: cover; // Cover the space without distortion
  border-radius: 10px 10px 0 0; // Rounded top corners
`;

const ProjectTitle = styled.h3`
  margin-top: 15px;
  font-size: 1.2em;
`;

const ProjectDescription = styled.p`
  margin-top: 10px;
  font-size: 0.9em;
  padding: 0 10px; // Add padding for better readability
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Projects = () => {
  const projectsData = [
    {
      title: "Project 1",
      description: "A brief description of Project 1.",
      imageUrl: "/images/project1.jpg", // Replace with your image path
      link: "YOUR_PROJECT1_LINK",
    },
    {
      title: "Project 2",
      description: "A brief description of Project 2.",
      imageUrl: "/images/project2.jpg", // Replace with your image path
      link: "YOUR_PROJECT2_LINK",
    },
    {
      title: "Project 3",
      description: "A brief description of Project 3.",
      imageUrl: "/images/project3.jpg", // Replace with your image path
      link: "YOUR_PROJECT3_LINK",
    },
    {
      title: "Project 4",
      description: "A brief description of Project 4.",
      imageUrl: "/images/project4.jpg", // Replace with your image path
      link: "YOUR_PROJECT4_LINK",
    },
  ];

  return (
    <Container>
      <ProjectsSection id="projects">
        <h2>Projects</h2>
        <ProjectsGrid>
          {projectsData.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage src={project.imageUrl} alt={project.title} />
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </ProjectLink>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsSection>
    </Container>
  );
};

export default Projects;